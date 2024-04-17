import  "../styles/home.css"
import Header from '../componets/header'

import { useState } from "react"
export default function  Home(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      };
    
      const images=[
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TVp5aDFZfB7K6owO5kSYsAKFPgk3R_0ICg&s",
            title:" we offer some of the best products"
        },
        {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOdGhNCMxAjFkJAGGYJNf4ENTUAFkV_2QQw&s",
        title:"we deliver products across the globe"
        }
    ]

      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      };
   
    return(
        <div className="home_page"> 
            <Header/>
            <div className="container">
                {
                    images.map((image,index)=>{
                       return <div  className={index === currentSlide ? " box" : "slide "}>
                            <img
                               src={image.url} 
                               key={index}
                            ></img>
                            <h1>{image.title}</h1>
                        </div>
                    })
                }
               <button className="prev" onClick={prevSlide}>&#10094;</button>
               <button className="next" onClick={nextSlide}>&#10095;</button> 
            </div>
            
        </div>   
    )
}