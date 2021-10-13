import React , {useReducer , useState} from "react"
import Context from "./Context";
import DataFORM from "./form";
import ReduceFunction from "./Reduuce";
import { v4 } from "uuid";
const Practices = ()=>{
    const [data , dispatch] = useReducer(ReduceFunction , [])
    // return(
    //     <div>
    //         <Context.Provider value={{data , dispatch}}>
    //             {data.map((d)=>{
    //                 return <p>{d.val}</p>
    //             })}
    //             <DataFORM />
    //         </Context.Provider>
    //     </div>
    // );
    const [val , setVal] = useState("")
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
        <div>
            {data.map((d)=>{
                return <h3>{d.val}</h3>
            })}
            <form onSubmit={handleSubmit}>
                <input name="name" value={val} onChange={e => setVal(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    );
}


export default Practices;