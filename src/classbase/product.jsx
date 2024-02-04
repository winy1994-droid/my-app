
import { Component } from "react";
import productContext from "../context/product";
class Product extends Component {
       
    static contextType=productContext
  
    render() {    
        return (
            <div>
              <span className="m-2 bg-info badge" >{this.props.productName}</span>
              <span className="m-2 bg-info badge" >{this.format()}</span>
              <button onClick={this.handleIncrement} className="btn btn-success badge m-2" >+</button>
              <button onClick={this.handleDecrement} className="btn btn-danger badge m-2" >-</button>
              <button onClick={this.handleDelete} className="btn btn-warning badge m-2" >delete</button>
            </div>
        );
    }
  


    handleIncrement=()=>{
       this.context.onIncrement(this.props.id)
    }

    handleDecrement=()=>{
       this.context.onDecrement(this.props.id)
    }
      
    handleDelete=()=>{
        this.context.onDelete(this.props.id)
    } 
    
    format=()=>{
       if(this.props.count===0){
              return "zero"
       }
       else{
        return this.props.count
       }
    }


}
 
export default Product;