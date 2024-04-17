import { useState,useEffect } from "react"
// import axios from 'axios';
import instance from '../services.js/api'
import { Link } from "react-router-dom";
import  "../styles/sidebar.css"
import Home from "../pages/home";
export default function Products(){
       const [categories,setCategory]=useState([])

    const getProducts = async ()=>{
        try {
            const response = await instance.get('/products/categories');
            console.log(response.data)
            const products = response.data;
            setCategory(products);
          
            }
          catch (error) {
            console.error('Error fetching product categories:', error);
          }
    }
    useEffect(()=>{
           getProducts()
    },[])

    return(
        
            <ul className="navbar">
              {categories.map((value)=><Link to={Home}>{value}</Link>)}
            </ul>
            
        
    )
}