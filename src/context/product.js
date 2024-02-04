import { createContext } from "react";

const productContext = createContext({
   //this data are here optional  for write here
    products:[],
    onReset:()=>{},
    onDelete:()=>{},
    onDecrement:()=>{},
    onIncrement:()=>{}
});

export default productContext;
 