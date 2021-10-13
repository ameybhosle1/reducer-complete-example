import React, { useState } from "react"
import { v4 } from "uuid";
import Context from "./Context";
const DataFORM = ()=>{
    const [val , setVal] = useState("")
    const {dispatch} = useState(Context)
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(val === ""){
            alert("ENTER DATA");
        }else{
            var data = {
                val,
                id:v4()
            }
            dispatch({
                type:'setDATA',
                payload:data
            })
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={val} onChange={e => setVal(e.target.value)} />
            <button>Submit</button>
        </form>
    );
}

export default DataFORM;