import React from 'react';
import '../index.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.js';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

import {useState} from 'react';


export  const SidebarData=[

    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Products',
        path: '/Products',
        icon: <FaIcons.FaShopify/>,
        iconClosed: <AiIcons.AiFillCaretDown/>,
        iconOpened: <AiIcons.AiFillCaretUp/>,
        subNav:[
            {
                title:'All',
                path: '/Products',
                icon: <GiIcons.GiMilkCarton/>
            },
            {
                
                title:'Fruits',
                path: '/Products',
                icon: <GiIcons.GiBananaBunch/>
            },
            {
                
                title:'Vegetables',
                path: '/Vegetables',
                icon: <GiIcons.GiTomato/>
            },

        ],
        cName: 'nav-text'
    },
    {
        title:'Services',
        path: '/ErrorPage',
        icon: <AiIcons.AiFillCustomerService/>,
        iconClosed: <AiIcons.AiFillCaretDown/>,
        iconOpened: <AiIcons.AiFillCaretUp/>,
        subNav:[
            {
                title:'Home Delivery',
                path: '/ErrorPage',
                icon: <FaIcons.FaTruck/>
            },
            {
                title:'Whole Sale',
                path: '/ErrorPage',
                icon: <GiIcons.GiOfficeChair/>
            }
            ,
            {
                title:'Function Contract',
                path: '/ErrorPage',
                icon: <GiIcons.GiHouse/>
            }

        ],
        cName: 'nav-text'
    },
    {
        title:'Contact Us',
        path: '/ErrorPage',
        icon: <AiIcons.AiFillPhone/>,
        cName: 'nav-text'
    },
    {
        title:'Logout',
        path:'/Login',
        icon:<AiIcons.AiOutlineLogout/>,
        cname:'nav-text'
    }


];
