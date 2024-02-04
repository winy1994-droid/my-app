import { Component} from "react";
import Product from './product'
import productContext from '../context/product'

class Products extends Component { 

     static contextType=productContext

    render() {   

        return (<div>
                 <button onClick={this.context.onReset} className="btn btn-info m-2 badge">reset</button>
                {this.context.products.map((p,index)=>(
                    <Product  id={p.id} key={index} count={p.count} productName={p.productName}/>
                ))}
        </div>);
    }  
} 
  
 
export default Products;