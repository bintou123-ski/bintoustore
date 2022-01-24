import React from 'react';
import "./product.scss";
import { products } from './products';

function Product() {
  return (
      <div className="row">
        {products.map((item,index)=>{
            console.log(item)
            return (
              <div className="col-lg-3 col-md-6">
              
           
              <div className="product__item">
               <div className="product__item__pic" style={{flexDirection:'row'}}>
                <img className="product__item__pic" src={item.image} style={{height:80,width:80,marginTop:2,borderRadius:7}}/>
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
                      <a href="#">{item.name}</a>
                  </h6>
                  <div className="product__price">{item.price} RMB</div>
               </div>
              </div>
          </div>
            )
          
})}
      </div>
  );
}

export default Product;
