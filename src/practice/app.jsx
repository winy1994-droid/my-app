import { Component } from "react";
import ProductContext from "./context";

class App extends Component {
    
      static contextType=ProductContext

    render() { 
        return (<div>
        
                <span className="m-2 badge bg-secondary" >{this.props.productName}</span>
                <span className="m-2 badge bg-secondary" >{this.format()}</span>
                <button onClick={this.add} className="m-2 btn btn-info badge" >+</button>
                <button onClick={this.reduce} className="m-2 btn btn-info badge" >-</button>
                <button onClick={this.remove} className="m-2 btn btn-info badge" >X</button>
        </div>);
    }
 
    add=()=>{
         this.context.onAdd(this.props.id)
    }
    reduce=()=>{
         this.context.onReduce(this.props.id)
    }
    remove=()=>{
       this.context.onDelete(this.props.id)
    }
    format=()=>{
        if (this.props.productNumber===0) {
            return "zero"
        }
        else{
            return this.props.productNumber
        }
    }
}
 
export default App;