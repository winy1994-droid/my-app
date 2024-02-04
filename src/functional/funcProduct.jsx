

 
import Product from "./product";
import { useContext } from "react";
import ProductContext from "../context/product";
                    
const  Products = (props) => {
      
  
  const productContext= useContext(ProductContext)
    return (
        <div>
         <button className="btn btn-info m-2 badge" onClick={productContext.onReset}>reset</button>
              {productContext.products.map((p,index)=>(
              <Product  
               id={p.id} 
               key={index} 
               productname={p.prouctName}
               count={p.count} 
              />  
                ))}
        </div>
      );

      
}

 
export default Products;
 