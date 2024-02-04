

import { Component } from "react";
import productContext from "../context/product"



class Navbar extends Component {
   
     static contextType =productContext

    render() { 
        return (<nav className="navbar navbar-brand bg-light">
             <div className="container-fluid">
                <a href="#https" className="navbar-brand">{this.calculateSum()}</a>
             </div>
        </nav>);
    }

    calculateSum=()=>{
       let sum=0;
       this.context.products.forEach(p => {
                sum+=p.count    
         });
         return sum;
     }

} 
 
export default Navbar; 


 