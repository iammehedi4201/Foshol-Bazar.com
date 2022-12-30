import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import './SelectedProduct.css'

const SelectedProduct = (props) => {
  const { img,name,quantity,id} = props.item;

  const {deleteAProduct}=props

  

  //  console.log("The Props is ",props);

  return (
    <div className="cart-inner-section">
      <div className="card mb-3 ">
        <div className="row g-0 card-div">
          <div className="col-md-4 col-6 card-div-col">
            <img src={img} className="rounded-start card-div-img" alt="..." />
          </div>
          <div className="col-md-8 col-6">
            <div className="card-body card-body-div">
                  <div className="selected-product-info">
                    <h3 className="text-size">{name}</h3>
                    <h6 className="text-size">Quantity:-{quantity}</h6>
                  </div>
              
                 <button onClick={()=>deleteAProduct(id)}       className="btn btn-edit" >
                   <FontAwesomeIcon className="icon-edit" icon={faTrashAlt}></FontAwesomeIcon>
                 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
