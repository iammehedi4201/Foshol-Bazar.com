const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const SSLCommerzPayment = require("sslcommerz-lts");
const { Vonage } = require("@vonage/server-sdk");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yuoqy9c.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//Vonage Initialize
const vonage = new Vonage({
  apiKey: `${process.env.VONAGE_API_KEY}`,
  apiSecret: `${process.env.VONAGE_API_SECRET}`,
});

/*------------Send Email By NodeMailer   ------------- */
const sendMail = async (email, orderinfo) => {
  console.log("The mail is :", email);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASS,
    },
  });
  const reciverMail = await email;
  const {
    date,
    transactionId,
    customerName,
    shippingAddress,
    orderItems,
    totalPrice,
  } = await orderinfo;
  const info = await transporter.sendMail({
    from: process.env.SMTP_USERNAME, // sender address
    to: reciverMail, // list of receivers
    subject: "Payment successful: Have a nice day!", // Subject line
    text: "Hello world?", // plain text body
    html: `<div class="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
    <div class="flex items-center justify-between mb-8">
        <div class="flex items-center">
            <img class="h-8 w-8 mr-2" src="https://tailwindflex.com/public/images/logos/favicon-32x32.png"
                alt="Logo" />
            <div class="text-gray-700 font-semibold text-lg">Foshol Bazar</div>
        </div>
        <div class="text-gray-700">
            <div class="font-bold text-xl mb-2">INVOICE</div>
            <div class="text-sm">Date: ${date}</div>
            <div class="text-sm">Invoice #: ${transactionId}</div>
        </div>
    </div>
    <div class="border-b-2 border-gray-300 pb-8 mb-8">
        <h2 class="text-2xl font-bold mb-4">Bill To:</h2>
        <div class="text-gray-700 mb-2">${customerName}</div>
        <div class="text-gray-700 mb-2">${shippingAddress?.address},${
      shippingAddress?.city
    }</div>
        <div class="text-gray-700">${reciverMail}</div>
    </div>
    <table class="w-full text-left mb-8">
        <thead>
            <tr>
                <th class="text-gray-700 font-bold uppercase py-2">Product Name</th>
                <th class="text-gray-700 font-bold uppercase py-2">Quantity</th>
                <th class="text-gray-700 font-bold uppercase py-2">Price</th>
            </tr>
        </thead>
        <tbody>
        ${orderItems
          .map(
            (product) =>
              `<tr>
            <td class="py-4 text-gray-700">${product.productName}</td>
            <td class="py-4 text-gray-700">${product.productQuantity}</td>
            <td class="py-4 text-gray-700">
              ${product.productPrice * product.productQuantity}
            </td>
          </tr>`
          )
          .join("")}   
        </tbody>
    </table>
    <div class="flex justify-end mb-8">
        <div class="text-gray-700 mr-2">Subtotal:</div>
        <div class="text-gray-700">${totalPrice}</div>
    </div>
    <div class="flex justify-end mb-8">
        <div class="text-gray-700 mr-2">Total:</div>
        <div class="text-gray-700 font-bold text-xl">${totalPrice}</div>
    </div>
</div>`, // html body
  });
  console.log("Message sent: %s", info.messageId);
};

//--------------for sslCommerz-------------
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox

//jwt middleware
const verifyjWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "you have no authoraization key " });
  }
  const token = authorization.split(" ")[1];
  //verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SCRETE_KEY, (error, decoded) => {
    //this conditon check the token expierydate
    if (error) {
      return res
        .status(403)
        .send({ error: true, message: "you token expiary data is over" });
    }
    //decode the infromation from token
    req.decoded = decoded;

    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db("Foshol-bazar").collection("Products");
    const userCartsCollection = client
      .db("Foshol-bazar")
      .collection("userCarts");
    const orderCollection = client.db("Foshol-bazar").collection("Orders");
    const userCollection = client.db("Foshol-bazar").collection("Users");
    const reviewCollection = client.db("Foshol-bazar").collection("Reviews");
    const couponsCollection = client.db("Foshol-bazar").collection("Coupons");

    /*------------jWT Api ------------- */

    app.post("/jwt", async (req, res) => {
      const userInfo = req.body;
      const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SCRETE_KEY, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    /*------------verifyAdmin  middleware------------- */
    //! warrning : use VerifyJwt before using verifyAdmin
    //middleware for verify admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      if (user?.role !== "admin") {
        return res.status(403).send({
          error: true,
          message: "you are not admin to access the information",
        });
      }
      next();
    };

    /*------------admin home  Api ------------- */
    //Admin stats
    app.get("/admin-stats", verifyjWT, verifyAdmin, async (req, res) => {
      const users = await userCollection.estimatedDocumentCount();
      const products = await productCollection.estimatedDocumentCount();
      const orders = await orderCollection.estimatedDocumentCount();
      const revenus = await orderCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalPrice: { $sum: "$totalPrice" },
            },
          },
        ])
        .toArray();

      res.send({
        userCount: users,
        productsCount: products,
        orderCounts: orders,
        revenus: revenus[0].totalPrice,
      });
    });

    //order-Stats
    app.get("/order-stats", verifyjWT, verifyAdmin, async (req, res) => {
      const pipline = [
        {
          $unwind: "$orderItems",
        },
        {
          $addFields: {
            ProductIDobj: { $toObjectId: "$orderItems.ProductID" },
          },
        },
        {
          $lookup: {
            from: "Products",
            localField: "ProductIDobj",
            foreignField: "_id",
            as: "products",
          },
        },
        {
          $unwind: "$products",
        },
        {
          $group: {
            _id: "$products.categories",
            count: { $sum: 1 },
            SelledProducts: { $addToSet: "$products.name" },
            totalPrice: { $sum: "$products.price" },
          },
        },
      ];

      const result = await orderCollection.aggregate(pipline).toArray();
      res.send(result);
    });

    //category stats
    app.get("/category-stats", verifyjWT, verifyAdmin, async (req, res) => {
      const pipline = [
        {
          $group: {
            _id: "$categories",
            count: { $sum: 1 },
            productsName: { $addToSet: "$name" },
          },
        },
        {
          $project: {
            category: "$_id",
            count: 1,
            productsName: 1,
            _id: 0,
          },
        },
      ];
      const result = await productCollection.aggregate(pipline).toArray();
      res.send(result);
    });

    //Selled Product stats
    app.get("/sellproducts-stats", verifyjWT, verifyAdmin, async (req, res) => {
      const pipline = [
        {
          $unwind: "$orderItems",
        },
        {
          $group: {
            _id: "$orderItems.productName",
            count: { $sum: 1 },
            totalSelledPrice: {
              $sum: {
                $multiply: [
                  { $ifNull: [{ $toInt: "$orderItems.productPrice" }, 0] },
                  { $ifNull: ["$orderItems.productQuantity", 0] },
                ],
              },
            },
            photoUrl: { $addToSet: "$orderItems.productImg" },
          },
        },
        {
          $sort: { totalSelledPrice: -1 },
        },
        {
          $project: {
            productName: "$_id",
            count: 1,
            totalSelledPrice: 1,
            photoUrl: 1,
            _id: 0,
          },
        },
      ];

      const result = await orderCollection.aggregate(pipline).toArray();
      res.send(result);
    });

    //Top customar stats
    app.get("/topCustomar-stats", verifyjWT, verifyAdmin, async (req, res) => {
      const pipline = [
        {
          $unwind: "$orderItems",
        },
        {
          $group: {
            _id: "$customerEmail",
            // customarName: { $addToSet: "$customerName" },
            phoneNumber: { $first: "$phoneNumber" },
            customarName: { $first: "$customerName" },
            buyProductCount: { $sum: "$orderItems.productQuantity" },
            totalSpent: {
              $sum: {
                $multiply: [
                  { $ifNull: [{ $toInt: "$orderItems.productPrice" }, 0] },
                  { $ifNull: ["$orderItems.productQuantity", 0] },
                ],
              },
            },
          },
        },
        {
          $sort: { totalSpent: -1 },
        },
        {
          $project: {
            customarEmail: "$_id",
            customarName: 1,
            phoneNumber: 1,
            buyProductCount: 1,
            totalSpent: 1,
            _id: 0,
          },
        },
      ];
      const result = await orderCollection.aggregate(pipline).toArray();
      res.send(result);
    });

    /*------------coupons  Api ------------- */

    //Read Coupon
    app.get("/coupons", verifyjWT, verifyAdmin, async (req, res) => {
      const coupon = req.query.coupon;
      if (coupon) {
        const query = { coupon: coupon };
        console.log(query);
        const couponDetails = await couponsCollection.findOne(query);
        if (couponDetails) {
          const { expiryDate } = couponDetails;
          const today = new Date().toLocaleDateString("en-US", {
            timeZone: "UTC",
          });
          const couponExpiryDate = new Date(expiryDate);
          const formattedExpiryDate = couponExpiryDate.toLocaleDateString(
            "en-US",
            { timeZone: "UTC" }
          );
          if (today > formattedExpiryDate) {
            res.send("Expiry date over");
          } else {
            res.send("Expiry date not over");
          }
        } else {
          res.send("coupon is not valid");
        }
      } else {
        const coupons = await couponsCollection.find().toArray();
        res.send(coupons);
      }
    });

    //Insert Coupon
    app.post("/coupons", verifyjWT, verifyAdmin, async (req, res) => {
      const coupons = req.body;
      const { coupon, expiryDate } = coupons;
      const couponExist = await couponsCollection.findOne({ coupon: coupon });
      console.log(couponExist._id);
      if (couponExist) {
        const modifiedResult = await couponsCollection.updateOne(
          {
            _id: couponExist._id,
          },
          {
            $set: {
              expiryDate: expiryDate,
            },
          }
        );
        res.send(modifiedResult);
      } else {
        const result = await couponsCollection.insertOne(coupons);
        res.send(result);
      }
    });

    //Send coupon To customer
    app.post("/sendCoupons", async (req, res) => {
      const customerDetails = req.body;
      const { phoneNumber, couponCode, couponExpiry } = customerDetails;
      const from = "Vonage APIs";
      const to = "8801775777038";
      const text = `Enjoy 20% off your next purchase with code: ${couponCode}. 
      Shop now at https://foshol-bazar.web.app/.
      Hurry, offer expires ${couponExpiry}!
      Thank you for choosing [Foshol Bazar].
      Happy shopping!`;

      async function sendSMS() {
        await vonage.sms
          .send({ to, from, text })
          .then((resp) => {
            console.log("Message sent successfully");
            console.log(resp);
          })
          .catch((err) => {
            console.log("There was an error sending the messages.");
            console.error(err);
          });
      }
      await sendSMS();
    });

    /*------------Users Api ------------- */

    //Read users
    app.get("/users", verifyjWT, verifyAdmin, async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    //insert users
    app.post("/users", async (req, res) => {
      const userInfo = req.body;
      const query = { email: userInfo.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ meassage: "User is already exist" });
      }
      const result = await userCollection.insertOne(userInfo);
      res.send(result);
    });

    //Make Admin
    app.patch("/users/admin/:id", verifyjWT, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    //Delete user
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    //check if he or she admin or not
    app.get("/users/admin/:email", verifyjWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        return res.send({ admin: false });
      }
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });

    // ----------Products api------------

    //read products
    app.get("/products", async (req, res) => {
      const searchValue = req.query.search;
      const category = req.query.category;
      let currentPage = parseInt(req.query.currentPage);
      const pageSize = parseInt(req.query.pageSize);
      let query = {};

      if (category) {
        query = { categories: category };
      }

      if (searchValue) {
        query = {
          $or: [
            { name: { $regex: searchValue, $options: "i" } },
            { categories: { $regex: searchValue, $options: "i" } },
          ],
        };
      }

      const cursor = productCollection.find(query);
      const productsCount = await cursor.count();
      const products = await cursor
        .skip(currentPage * pageSize)
        .limit(pageSize)
        .toArray();

      res.send({ productsCount, products });
    });

    //Add product
    app.post("/newproducts", verifyjWT, verifyAdmin, async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });

    //update product
    app.put("/products/:id", verifyjWT, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      console.log(id, updateInfo);
      let query = {};
      if (id) {
        query = { _id: new ObjectId(id) };
      }

      const result = await productCollection.updateOne(query, {
        $set: {
          name: updateInfo.name,
          rating: updateInfo.rating,
          price: updateInfo.price,
          categories: updateInfo.categories,
          description: updateInfo.description,
          img: updateInfo.img,
        },
      });
      res.send(result);
    });

    app.delete("/products/:id", verifyjWT, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    // ----------carts item api------------

    //Read cart items
    app.get("/cart-items", verifyjWT, async (req, res) => {
      const decoded = req.decoded;
      if (decoded.email !== req.query.email) {
        return res.status(403).send({
          error: true,
          message: "you have not right access other information ",
        });
      }
      let query = {};
      if (req.query.email) {
        query = { userEmail: req.query.email };
      }
      // console.log(query);
      const orders = await userCartsCollection.find(query).toArray();
      res.send(orders);
    });

    //insert cart items
    app.post("/cart-items", async (req, res) => {
      const cartItem = req.body;
      const cartItemId = cartItem.ProductID;
      // console.log(ProductID);
      const query = { ProductID: cartItemId };
      const options = { upsert: true }; //We use the upsert: true option in the updateOne method to perform an upsert operation. This means that if an order with the given ProductID exists, it will be updated with the new values provided in order. If it doesn't exist, a new order will be inserted with the provided data.
      const result = await userCartsCollection.updateOne(
        query,
        { $set: cartItem },
        options
      );
      res.send(result);
    });

    //Delete cart items
    app.delete("/cart-items/:id", async (req, res) => {
      const cartItemsId = req.params.id;
      const query = { _id: new ObjectId(cartItemsId) };
      const result = await userCartsCollection.deleteOne(query);
      res.send(result);
    });

    //update cart items
    app.put("/cart-items/:id", async (req, res) => {
      const id = req.params.id;
      const updateCartItemQuantity = req.body;
      // console.log(updateCartItemQuantity);
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const result = await userCartsCollection.updateOne(
        query,
        { $set: updateCartItemQuantity },
        options
      );
      res.send(result);
    });

    //-------------order api---------------

    //Read orders
    app.get("/orders", verifyjWT, async (req, res) => {
      console.log("Order api is called", req.query.email);
      if (req.query.email) {
        const query = { customerEmail: req.query.email };
        const orders = await orderCollection.find(query).toArray();
        res.send(orders);
      } else {
        const orders = await orderCollection.find().toArray();
        res.send(orders);
      }
    });

    //insert Orders
    app.post("/orders", verifyjWT, async (req, res) => {
      const tran_id = new ObjectId().toString(); //this for tran_Id
      const orderInfo = req.body;
      console.log("orderInfo is :-", orderInfo);
      const data = {
        total_amount: orderInfo.totalPrice,
        currency: "BDT",
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `https://foshol-bazar.onrender.com/payment/success/${tran_id}`, //in this use vercel link
        fail_url: `https://foshol-bazar.onrender.com/payment/fail/${tran_id}`, //in this use vercel link
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: orderInfo.deilveryMethod,
        product_name: orderInfo?.orderItems
          .map((product) => product.productName)
          .join(),
        product_category: "vegetables",
        product_profile: "general",
        cus_name: orderInfo.customerName,
        cus_email: orderInfo.customerEmail,
        cus_add1: orderInfo.shippingAddress?.address,
        cus_state: orderInfo?.shippingAddress?.city,
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: orderInfo.phoneNumber,
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
      };
      // console.log(data);
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz.init(data).then((apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send({ url: GatewayPageURL });
      });

      //insert order into orderColleciton
      orderInfo.paidStatus = false;
      orderInfo.status = "Pending";
      orderInfo.transactionId = tran_id;
      orderInfo.orderItems = orderInfo.orderItems.map((product) => ({
        uid: uuidv4(),
        ...product,
        reviewStatus: false,
      }));
      const insertResut = await orderCollection.insertOne(orderInfo);

      //New success route
      app.post("/payment/success/:tranId", async (req, res) => {
        const query = { transactionId: req.params.tranId };
        sendMail(orderInfo.customerEmail, orderInfo);
        const updatedResult = await orderCollection.updateOne(query, {
          $set: {
            paidStatus: true,
          },
        });
        if (updatedResult.modifiedCount > 0) {
          res.redirect(
            `https://foshol-bazar.web.app/dashboard/payment/success/${req.params.tranId}` //in this use firbase link
          );
        }
      });

      //Faild Route
      app.post("/payment/fail/:tranId", async (req, res) => {
        const query = { transactionId: req.params.tranId };
        const deleteResult = await orderCollection.deleteOne(query);
        if (deleteResult.deletedCount > 0) {
          res.redirect(
            `https://foshol-bazar.web.app/dashboard/payment/fail/${req.params.tranId}` //in this use firbase link
          );
        }
      });
    });

    //update orders
    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.updateOne(query, {
        $set: {
          status: "Done",
        },
      });
      res.send(result);
    });

    //After success Cart item deleted
    app.delete("/cartsItems/:id", async (req, res) => {
      const id = req.params.id;
      const query = { transactionId: id };
      const order = await orderCollection.findOne(query);
      const qureyTwo = {
        _id: { $in: order.cartItemId.map((id) => new ObjectId(id)) },
      };
      const deleteReuslt = await userCartsCollection.deleteMany(qureyTwo);
      res.send(deleteReuslt);
    });

    //------------------Review APi -------------------
    app.post("/reviews", async (req, res) => {
      const reviews = req.body;
      const { uid } = reviews;
      // console.log(productID);
      const updateResult = await orderCollection.updateOne(
        {
          "orderItems.uid": uid, //!got error that
        },
        { $set: { "orderItems.$.reviewStatus": true } }
      );
      const result = await reviewCollection.insertOne(reviews);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
