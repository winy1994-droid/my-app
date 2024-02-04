 import { Component } from "react";
 import ProductContext from './context'
 import Apps from './apps'
 import NavbarClass from "./navbarClass";

class Main extends Component {


    state = { products:[
        {id:1,number:3,name:"laptop"},
        {id:2,number:5,name:"iphone"},
        {id:3,number:1,name:"PS-5"}
    ] } 


    render() { 
        return (<>
               <ProductContext.Provider
                 
                 value={{
                    products:this.state.products,
                    onReset:this.handleReset,
                    onAdd:this.handleAdd,
                    onReduce:this.handleReduce,
                    onDelete:this.handleDelete
                 }} 
               >
                <NavbarClass />
                 <Apps />
                 
               </ProductContext.Provider>
        </>);
    }


    handleReset=()=>{
        const newProducts= this.state.products.map((p)=>{
            p.number=0
            return p
         })

         this.setState({products:newProducts})
      }


      handleAdd=(ID)=>{
        const newProducts=[...this.state.products]
        const index=newProducts.findIndex(p=>p.id===ID)
        newProducts[index].number+=1
        this.setState({products:newProducts})
      }


      handleReduce=(ID)=>{
        const newProducts=[...this.state.products]
        const index=newProducts.findIndex(p=>p.id===ID)
        newProducts[index].number-=1
        this.setState({products:newProducts})
      }

      handleDelete=(ID)=>{
        const newProducts=this.state.products.filter(p=>p.id!==ID)
        this.setState({products:newProducts})  
      }

}
 
export default Main;