import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './Components/Register';
import Cards from './Components/Cards';
import Products from './Components/Products';
import Home from './Components/Home';
import Login from './Components/Login'; 
import Vegetables from './Components/Vegetables.jsx';
import Sidemenu from './Components/Sidemenu.jsx';

import { sliderImages } from './Components/SliderImages.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Tryslide from './Components/Tryslide.jsx';
ReactDom.render(
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/Register" component={Register}></Route>
    <Route exact path="/Login" component={Login}></Route>
    <Route exact path="/Products" component={Products}></Route>
    <Route exact path="/Vegetables" component={Vegetables}></Route>
    <Route exact path="/ErrorPage" component={ErrorPage}></Route>
    </Switch>
    </Router>
,
document.getElementById('root')
  
);