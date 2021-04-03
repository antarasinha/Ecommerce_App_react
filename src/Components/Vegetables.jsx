import React from 'react'
import {Link} from 'react-router-dom'
import {CardData} from './CardData'
import Cards from './Cards'
import './bootcard.css'
import  'bootstrap/dist/css/bootstrap.css';
import  'bootstrap/dist/js/bootstrap.bundle.js';
import { VegetableData } from './VegetableData'
const Vegetables=()=>{
    return (
        <>
            <div classNameName="my-5">
            
            <div classNameName="container-fluid mb-5">
            <div className="linkcollection">
            <div className="row">
            <div className="col-sm-4">
            <Link to="/Products" className="cardlink"><button className="btn btn-light btncol">All</button></Link>
            </div>
            <div className="col-sm-4">
            <Link to="/Products" className="cardlink"><button className="btn btn-light btncol">Fruits</button></Link>
            </div>
            <div className="col-sm-3">
            <Link to="/Vegetables" className="cardlink"><button className="btn btn-light btncol">Vegetables</button></Link>
            </div>
            </div>
            </div>
            <div className="row cardrow">
            
            {
                VegetableData.map((val,ind) =>{
                    return (
                        <Cards imgsrc={val.imgs}  titles={val.titles} price={val.price}/>
                    )
                })
            }
            </div>
            </div>
            
            </div>
        </>
    );
}

export default Vegetables;