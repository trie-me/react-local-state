// api
import {Dispatch} from "react";
import {Bar, Baz, Foo} from "./AggregateStateExampleModels";
import {FooMachineCommands} from "./FooMachineCommands";

const getFoo = (reducer: Dispatch<FooMachineCommands>) => new Promise<Foo>((r) => {
    r({
        name: 'Foo name!',
        color: 'Blartreuse'
    })
}).then(v => reducer({kind: "UPDATE_FOO", payload: {foo: v}}));
const getBar = (reducer: Dispatch<FooMachineCommands>) => new Promise<Bar>(r => {
    r({
        name: 'Bar name!',
        age: '21'
    })
}).then(v => reducer({kind: 'UPDATE_BAR', payload: {bar: v}}));
const getBaz = (reducer: Dispatch<FooMachineCommands>) => new Promise<Baz>(r => {
    r({
        name: 'Baz Name!',
        birthday: '21 Nevtober'
    })
}).then(v => reducer({kind: "UPDATE_BAZ", payload: {baz: v}}))

// bind api
export function getReducerBoundApi(reducer: Dispatch<FooMachineCommands>) {
    return {
        getFoo: getFoo.bind(null, reducer),
        getBar: getBar.bind(null, reducer),
        getBaz: getBaz.bind(null, reducer)
    }
}
