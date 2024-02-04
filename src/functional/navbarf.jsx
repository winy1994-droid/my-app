
import ProductContext from "../context/product";
import { useContext } from "react";


const Navbarf = (props) => {
             
     const productContext=useContext(ProductContext)
                     
        return (<nav className="navbar navbar-brand bg-light">
             <div className="container-fluid">
                <a href="#https" className="navbar-brand">{calculateSum()}</a>
             </div>
        </nav>);

 
   function calculateSum(){
    let sum=0;
    productContext.products.forEach(p => {
        sum+=p.count    
    });
      return sum;
    }

    }
 
 
export default Navbarf;