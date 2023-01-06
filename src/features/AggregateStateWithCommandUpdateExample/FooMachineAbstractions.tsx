import {FooBarBazggregate} from "./AggregateStateExampleModels";
import {Dispatch} from "react";
import {FooMachineCommands} from "./FooMachineCommands";

export type FooMachineApi = { getFoo: () => Promise<void>, getBar: () => Promise<void>, getBaz: () => Promise<void> };
export type Reset = 'reset';
export type FooStateMachineTuple = [FooBarBazggregate, Dispatch<FooMachineCommands | "reset">, FooMachineApi];
