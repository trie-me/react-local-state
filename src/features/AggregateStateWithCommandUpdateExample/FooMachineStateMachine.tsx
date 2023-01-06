import {FooStateMachineTuple, Reset} from "./FooMachineAbstractions";
import {useReducer} from "react";
import {FooBarBazggregate} from "./AggregateStateExampleModels";
import {getReducerBoundApi} from "./FooMachineClient";
import {FooMachineCommands} from "./FooMachineCommands";

export const getFooStateMachine = (): FooStateMachineTuple => {
    const [state, dispatch] = useReducer(
        (
            currentState: FooBarBazggregate,
            action: FooMachineCommands | Reset
        ) => {
            return action === 'reset' ? {} : {...currentState, ...action.payload}
        }, {})
    return [state, dispatch, getReducerBoundApi(dispatch)]
}
