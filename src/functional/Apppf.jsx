
import { useState } from "react";
import Navbarf from "./navbarf";
import Products from "./funcProduct";
import productContext from '../context/product'

const Apppf = () => {
  
     
    
    const [products,setProducts]=useState([
        {id:1,count:2,prouctName:"laptop"},
        {id:2,count:3,prouctName:"iphone"},
        {id:3,count:4,prouctName:"airpod"}
    ])    
 
    return ( <>
           
                <productContext.Provider
                     value={{
                         products:products,
                         onReset:handleReset,  
                         onIncrement:Increment, 
                         onDecrement:Decrement ,
                         onDelete:handleDelete   
                     }}
                >
                    <Navbarf />
                    <Products />
                </productContext.Provider>
    </> );

          
   function handleReset(){
    const newProducts=products.map((p)=>{
         p.count=0
         return p
    });
   setProducts(newProducts) 
} 

function Increment(productId){
      const newProducts=[...products];
      const index=newProducts.findIndex(p=>p.id===productId);
      newProducts[index].count+=1;
       setProducts(newProducts);
}

function Decrement(productId){
       const newProducts=[...products];
       const index=newProducts.findIndex(p=>p.id===productId);
       newProducts[index].count -= 1;
        setProducts(newProducts);
}

 function handleDelete(productId){
      const newProducts=products.filter(p =>p.id !== productId);
      setProducts(newProducts);
      }
}
 
export default Apppf;