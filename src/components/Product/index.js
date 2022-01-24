import React from 'react';
import "./product.scss";


const products=[
    require("../../assets/img/shop/shop1.jpg"),
    require("../../assets/img/shop/shop2.jpg"),
    require("../../assets/img/shop/shop3.jpg"),
    require("../../assets/img/shop/shop4.jpg"),
    require("../../assets/img/shop/shop5.jpg")
]

function Product() {
  return (
      <div className="row">
        {products.map((item,index)=>(
          <div className="col-lg-3 col-md-6">
              
           
              <div className="product__item">
               <div className="product__item__pic">
                <img className="product__item__pic" src={item}/>
                <ul className="product__hover">
                    <li>
                        <a href={item}>
                        <span className="fa fa-arrows-alt"/>
                        </a>

                    </li>
                </ul>
                </div>
              
               <div className="product__item__text">
                  <h6>
                      <a href="#">Black Coats for Women</a>
                  </h6>
                  <div className="product__price">150 RMB</div>
               </div>
              </div>
          </div>
             ))}
      </div>
  );
}

export default Product;
