// 1. Import Area
import { useState } from "react";


// 2. Function Defination Area
function App(){

    var [counter,setCounter]=useState(5)

    let addValue=()=>{
        //counter  +=counter;
        counter=counter+1;
        setCounter(counter);
        console.log('counter is:',counter);
    }

    function removeValue(){
        setCounter(counter-1);
        console.log('counter is remove :',counter);
    }

    /*let counter=5;

    let addValue=()=>{
        //alert("addValue is",Math.random());
        console.log("addValue is",Math.random());
        counter=counter+1;
        console.log("counter is",counter)
    }
    */

    return(
        <>
            <h1>Deepak Prajapati SawaiyaPattidari</h1>

            <h1>Counter is : {counter}</h1>
            <button
                onClick={addValue}
            >Add</button>        
            <button
                onClick={removeValue}
            >Remove</button>        
        </> 
    )
}


// 3. return Statements
export default App;