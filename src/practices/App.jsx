



const App = ({onAdd,onReduce,onDelete,productNumber,productName,id}) => {

    return ( 
         <div>
                <span className="m-2 badge bg-secondary" >{productName}</span>
                <span className="m-2 badge bg-secondary" >{format()}</span>
                <button onClick={add} className="m-2 btn btn-info badge" >+</button>
                <button onClick={reduce} className="m-2 btn btn-info badge" >-</button>
                <button onClick={remove} className="m-2 btn btn-info badge" >X</button>       
        </div>
        );

 

  function add(){
        onAdd(id)
    }

    function reduce(){
        onReduce(id)
    }

    function remove(){
     onDelete(id)
    }
    
    function  format(){
        if (productNumber===0) {
            return "zero"
        }
        else{
            return productNumber
        }
    }

}
 
export default App;