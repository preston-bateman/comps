import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => { 
    switch(action.type) {
        case 'increment-count':
            return{
                ...state,
                count: state.count + 1,
            }
        case 'decrement-count':
            return{
                ...state,
                count: state.count - 1,
            }
        case 'change-value':
            return{
                ...state,
                valueToAdd: action.payload,
            }
        case 'add-value':
            return{
                ...state,
                count: state.count + action.payload,
                valueToAdd: ''
            }
        default: 
            throw new Error('unexpected action type in useReducer')
    }
 }

function CounterPage({ initialCount }) {
    
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: 'increment-count'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'decrement-count'
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0

        dispatch({
            type: 'change-value',
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

       dispatch({
        type: 'add-value',
        payload: state.valueToAdd
       })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
               <label>Add a lot!</label> 
               <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
               <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage