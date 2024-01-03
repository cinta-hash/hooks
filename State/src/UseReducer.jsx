import { useReducer } from "react"

export default function UseReducer(){

    const [state, dispatch]=useReducer(count: counter + 1, )
    return(
        <div>
            {count} <br />
            <button className="rounded-md bg-red-200"
                onClick={()=>{
                    setCount(count + 1)
                    setShowText(!showText)
                }

                }
            >
                Click Me!
            </button>
            {showText && <p>this text disappears</p>}
        </div>
    )
}