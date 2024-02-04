 
 import { useContext } from "react";
 import ProductContext from "../context/product";    
 
 
const Product= ({productname,count,id}) => {
 
          
      const productContext = useContext(ProductContext)
           

    return (
       <div>
              <span className="m-2 bg-info badge" >{productname}</span>
              <span className="m-2 bg-info badge">{format()}</span>
              <button onClick={handleIncrement} className="btn btn-success badge m-2" >+</button>
              <button onClick={handleDecrement} className="btn btn-danger badge m-2" >-</button>
              <button onClick={handleRemove} className="btn btn-warning badge m-2" >delete</button>
     </div> 
     );


 
 function handleIncrement(){
  productContext.onIncrement(id)
    
 }

 function handleDecrement(){
  productContext.onDecrement(id)
 }

   function handleRemove(){
   productContext.onDelete(id)
   }


 function format(){
    if(count===0){
     return "zero"
    }
    else{
     return count
    }
 }


}




 
export default Product;