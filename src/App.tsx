import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Posts} from "./features/BasicReduceExample/Posts";
import {FooMachine} from "./features/AggregateStateExample/FooMachine";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Posts></Posts>
            <FooMachine></FooMachine>
        </>
    )
}

export default App
