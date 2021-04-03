import React from 'react'
import  'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

import Products from './Products'
function Cards(props){
    return (
        <>
            <div className="col-sm-3 ml-5 mb-5">
                        <div class="card">
                        <img src={props.imgsrc} class="card-img-top" alt={props.titles}/>
                        <div class="card-body">
                        <h5 class="card-title">{props.titles}</h5>
                        <p class="card-text">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star unchecked"></span>
                        <span class="fa fa-star unchecked"></span> <Link to="#" class="btn btn-success cartbtn">Add To Cart</Link></p>
                        <h6 class="card-price">{props.price}</h6>
                        </div>
                        </div>
                        </div>
                        </>
    )

}
export default Cards;