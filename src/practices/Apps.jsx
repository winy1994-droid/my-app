

import App from "./App";
import { useState } from "react";
  
const Apps = () => {
 
   const [products,setProducts]=useState([
      {id:1,number:2,name:"laptop"},
      {id:2,number:5,name:"iphone"},
      {id:3,number:1,name:"airpod"}
  ]) 
    return ( 
        <div>
         <button onClick={handleReset} className="m-2 btn btn-success badge" >Reset</button>
         {products.map((p,index)=>(
            <App key={index} id={p.id} productName={p.name} productNumber={p.number} onReduce={handleReduce} onDelete={handleDelete} onAdd={handleAdd} />
         ))}
       </div> 
    );


 function handleReset(){
    const newProducts= products.map((p)=>{
        p.number=0
        return p
     })
     setProducts(newProducts) 
  }
 

 function handleAdd(ID){
    const newProducts=[...products]
    const index=newProducts.findIndex(p=>p.id===ID)
    newProducts[index].number+=1
    setProducts(newProducts) 
  }


  function handleReduce(ID){
    const newProducts=[...products]
    const index=newProducts.findIndex(p=>p.id===ID)
    newProducts[index].number-=1
    setProducts(newProducts) 
  }


 function handleDelete(ID){
    const newProducts=products.filter(p=>p.id!==ID)
    setProducts(newProducts) 
  }


}
 
export default Apps;