import {BarRender, BazRender, FooRender} from "./FooMachineDumbComponents";
import {getFooStateMachine} from "./FooMachineStateMachine";

export function FooMachineSmartComponent() {
    const [{foo, bar, baz}, dispatch, api] = getFooStateMachine();
    return <>
        <h1>Foo machine smart component with commands example</h1>
        <FooRender foo={foo} client={api}></FooRender>
        <BarRender bar={bar} client={api}></BarRender>
        <BazRender baz={baz} client={api}></BazRender>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>
}
