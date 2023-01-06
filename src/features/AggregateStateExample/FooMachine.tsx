import {useReducer} from "react";
import {Bar, Baz, Foo, FooBarBazggregate} from "./AggregateStateExampleModels";

export function FooRender({foo}: { foo: Foo }) {
    return <div>
        <p>Name: {foo.name}</p>
        <p>Color: {foo.color}</p>
    </div>
}

export function BarRender({bar}: { bar: Bar }) {
    return <div>
        <p>Name:{bar.name}</p>
        <p>Age: {bar.age}</p>
    </div>
}

export function BazRender({baz}: { baz: Baz }) {
    return <div>
        <p>Name: {baz.name}</p>
        <p>Birthday: {baz.birthday}</p>
    </div>
}

const exampleFoo: Foo = {
    name: 'Foo name!',
    color: 'Blartreuse'
};

const exampleBar: Bar = {
    name: 'Bar name!',
    age: '21'
}

const exampleBaz: Baz = {
    name: 'Baz Name!',
    birthday: '21 Nevtober'
}

type Reset = 'reset';

export function FooMachine() {
    const [{
        foo,
        bar,
        baz
    }, dispatch] = useReducer((currentState: FooBarBazggregate, action: Partial<FooBarBazggregate> | Reset) => {
        return action === 'reset' ? {} : {...currentState, ...action} as FooBarBazggregate
    }, {})
    return <>
        <h1>Foo machine example</h1>
        {foo ? <FooRender foo={foo}></FooRender> : <></>}
        {bar ? <BarRender bar={bar}></BarRender> : <></>}
        {baz ? <BazRender baz={baz}></BazRender> : <></>}
        <button onClick={() => dispatch({foo: exampleFoo})}>Set Foo</button>
        <button onClick={() => dispatch({bar: exampleBar})}>Set Bar</button>
        <button onClick={() => dispatch({baz: exampleBaz})}>Set Baz</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>
}
