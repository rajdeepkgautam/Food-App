import React from "react";
import { Link } from "react-router-dom";

function Product({check}) {

  return (
    <div>
        <div className="row">
        {check.map(check =>

      <div  className="card" style={{"width": "18rem"}}>
        <img src={check.recipe.image} className="card-img-top" alt="food"  />
        <div className="card-body">
          <h5 className="card-title">  {check.recipe.label} </h5>
          <p className="card-text">
            Total number of calories : {Math.round( check.recipe.calories)}
          </p>
          <a href="#" className="btn btn-primary">
            View
          </a>
        </div>
      </div>
        )}
    </div>
    </div>
  );
}

export default Product;
