
import { Component } from "react";
import Navbar from "./navbar";
import Products from './products'
import ProductContext from '../context/product'



class Appp extends Component {  
   
    state = { 
        products:[
         {id:1,count:2,prouctName:"laptop"},
         {id:2,count:3,prouctName:"iphone"}, 
         {id:3,count:4,prouctName:"airpod"}
     ]
    }
    render() { 
        return (<>
             
         <ProductContext.Provider     
         value={{
             products:this.state.products,
             onIncrement:this.Increment,
             onDecrement:this.Decrement,
             onDelete:this.Delete   ,     
             onReset:this.handleReset 
            }}
            >
         <Navbar /> 
         <Products />
         </ProductContext.Provider>
            
        </>);
    }


    Increment=(productId)=>{
        const newProducts=[...this.state.products];
        const index=newProducts.findIndex(p=>p.id===productId);
        newProducts[index].count+=1;
        this.setState({products:newProducts});
 }

 Decrement=(productId)=>{
         const newProducts=[...this.state.products]
         const index=newProducts.findIndex(p=>p.id===productId)
         newProducts[index].count-=1
         this.setState({products:newProducts})
 }

 Delete=(productId)=>{
 const newProducts=this.state.products.filter(p=>p.id!==productId);
  this.setState({products:newProducts})
 }

 handleReset=()=>{
    const newProducts=this.state.products.map((p)=>{
         p.count=0;
       return p
    });
    this.setState({products:newProducts})
}

}
 
export default Appp;