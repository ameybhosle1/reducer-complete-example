import React from "react"

// const ReduceFunction = (state , action)=>{
    
// }

export default (state , action) => {
    switch (action.type) {
        case 'setDATA':
            return [...state , action.payload]
        default:
            break;
    } 
};