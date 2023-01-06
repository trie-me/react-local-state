import {Bar, Baz, Foo, FooBarBazggregate} from "./AggregateStateExampleModels";

interface AggregateMember<AggregateType, PayloadType extends Partial<AggregateType>> {
    [key: string]: PayloadType
}

interface ReducerCommand<KindType extends string, AggregateType, PayloadType extends Partial<AggregateType>> {
    kind: KindType
    payload: PayloadType
}

export interface UpdateFooCommand extends ReducerCommand<'UPDATE_FOO', FooBarBazggregate, { foo: Foo }> {
}

export interface UpdateBarCommand extends ReducerCommand<'UPDATE_BAR', FooBarBazggregate, { bar: Bar }> {
}

export interface UpdateBazCommand extends ReducerCommand<'UPDATE_BAZ', FooBarBazggregate, { baz: Baz }> {
}

export type FooMachineCommands = UpdateFooCommand | UpdateBarCommand | UpdateBazCommand
