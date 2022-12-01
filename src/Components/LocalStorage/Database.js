const addToDb=(id)=>{

     const getCart = localStorage.getItem("shopping-cart");

     let shoppingCart ={};

     if (getCart) {

         shoppingCart=JSON.parse(getCart);
        
     }
     else{

         shoppingCart={};

     }

     const quantity = shoppingCart[id];

     if (quantity) {

        shoppingCart[id]=shoppingCart[id]+1
        
     }
     else{

        shoppingCart[id] = 1;

     }

     localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))

}    
 
const storedCart=()=>{

     const getCart = localStorage.getItem("shopping-cart");

     let shoppingObj ={};

     if (getCart) {

         shoppingObj = JSON.parse(getCart);
        
     }
     else{
         shoppingObj ={};
     }

     return shoppingObj;

}

const deleteAProductFormDb=(id)=>{

     const getCart =localStorage.getItem("shopping-cart")
     
     let shoppingObj ={};

     if (getCart) {

         shoppingObj = JSON.parse(getCart);

         if (id in shoppingObj) {

             delete shoppingObj[id];

             localStorage.setItem("shopping-cart",JSON.stringify(shoppingObj));
            
         }
        
     }



}


export {
    addToDb,
    storedCart,
    deleteAProductFormDb
}