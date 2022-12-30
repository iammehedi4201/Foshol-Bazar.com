import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Vegetables.css";

const Vegetables = () => {
  return (
    <div className="bg-color mt-4 ">
         <h4 className="text-center"> Vegetables Benifit</h4>
        <Row xs={1} md={3} className="g-4 ">
      <Col>
        <Card className="card-size bg-color">
          <Card.Img
            variant="top"
            src="./img/Broccoli/gettyimages-184597372-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Broccoli</Card.Title>
            <Card.Text>
              Broccoli is high in many nutrients, including fiber, vitamin C,
              vitamin K, iron, and potassium. It also boasts more protein than
              most other vegetables.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className=" card-size bg-color">
          <Card.Img
            variant="top"
            src="./img/carot/gettyimages-87391356-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Carot</Card.Title>
            <Card.Text>
              The carrot is a root vegetable often claimed to be the perfect
              health food. It is crunchy, tasty, and highly nutritious. Carrots
              are a particularly good source of beta carotene, fiber, vitamin
              K1, potassium, and antioxidants.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-size bg-color"> 
          <Card.Img
            variant="top"
            src="./img/Cauliflower/gettyimages-175383632-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Cauliflower</Card.Title>
            <Card.Text>
              Cauliflower is a cruciferous vegetable that is naturally high in
              fiber and B-vitamins. It provides antioxidants and phytonutrients
              that can protect against cancer. It also contains fiber to enhance
              weight loss and digestion.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-size bg-color">
          <Card.Img
            variant="top"
            src="./img/garlic/gettyimages-1299341242-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Garlic</Card.Title>
            <Card.Text>
              Garlic contains antioxidants that support the body's protective
              mechanisms against oxidative damage ( 19 ). High doses of garlic
              supplements have been shown to increase antioxidant enzymes in
              humans.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-size bg-color">
          <Card.Img
            variant="top"
            src="./img/onion/gettyimages-1138110993-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Onion</Card.Title>
            <Card.Text>
              What are benefits of onions? Image result for about onion Onions
              contain antioxidants and compounds that fight inflammation,
              decrease triglycerides, and reduce cholesterol levels — all of
              which may lower heart disease risk
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-size bg-color">
          <Card.Img
            variant="top"
            src="./img/tomato/gettyimages-106475773-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Tomato</Card.Title>
            <Card.Text>
              Tomatoes are low in calories and provide important nutrients like
              vitamin C and potassium. They're also rich in antioxidants—one
              called lycopene
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
    
  );
};

export default Vegetables;
