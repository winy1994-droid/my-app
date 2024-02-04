
import {Component} from "react";
import ProductContext from "./context";

class navbar extends Component {

    static contextType=ProductContext

    render() { 
        return (
            <>
                 <nav className="navbar navbar-brand bg-light ">
                     <div className="container-fluid">
                        <a className="navbar-brand" href="#hhh">{this.clculateTotal()}</a>
                     </div>
                 </nav>
            </>
        );
    }

    clculateTotal=()=>{
      
     let total=0;
     this.context.products.forEach(p => {
       total+= p.number
     });

     return total
    }
     

}
 
export default navbar;