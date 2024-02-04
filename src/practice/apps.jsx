

import { Component } from "react";
import ProductContext from "./context"
import App  from "./app";


class Apps extends Component { 

  static contextType=ProductContext
   
    render() { 
        return (<>
             <button  onClick={this.context.onReset}  className="m-2 badge btn btn-success">Reset</button>
           {this.context.products.map((p,index)=>(
            <App   key={index} id={p.id}   productName={p.name} productNumber={p.number} />
           ))}
               
        </>);
    
     }
   
}
 
export default Apps;