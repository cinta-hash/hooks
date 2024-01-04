import { useReducer } from "react"

export default function UseReducer(){
const reducer=(state, action)=>{
    switch(action.type){
        case "INCREMENT":
                return{count: state.count +1, showText: state.showText}
        case "toggleShowText":
            return{count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const [state, dispatch]= useReducer(reducer,{count: 0, showText: true})
    
    return(
        <div>
            {state.count} <br />
            <button className="rounded-md bg-red-200"
           onClick={()=>{
                dispatch({type: "INCREMENT"})
                dispatch({type: "toggleShowText"})
           }}>
                Click Me!
            </button>
            {state.showText && <p>this text disappears</p>}
        </div>
    )
}