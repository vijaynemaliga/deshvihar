import { useState,useEffect } from "react"
import instance from '../services.js/api'
import Sidebar from "../componets/sidebar"
import { Link } from "react-router-dom";
import '../styles/product.css'
export default function Product(){
    const [allproducts,setallProducts]=useState([])
    const getallProducts=async()=>{
        try{
        const response=await instance.get('/products')
        const allProducts=  response.data
        
        setallProducts(allProducts)
        }
        catch(error){
            console.error('Error fetching product:', error);
        }
    }

    useEffect(()=>{
        getallProducts()
    },[])
    return(
       <div className="product-page">
           <Sidebar/>
           <div className="products">
            {
                allproducts.map((value)=><div className="product-item"> 
                    <img src={value.image}></img>
                    <Link>{value.title}</Link>
                </div>)
            }
           </div>
       </div>
        
    )
}