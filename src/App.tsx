import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Posts} from "./features/BasicReduceExample/Posts";
import {FooMachine} from "./features/AggregateStateExample/FooMachine";
import {FooMachineSmartComponent} from "./features/AggregateStateWithCommandUpdateExample/FooMachineSmartComponent";

function App() {
    return (
        <>
            <Posts></Posts>
            <FooMachine></FooMachine>
            <FooMachineSmartComponent></FooMachineSmartComponent>
        </>
    )
}

export default App
