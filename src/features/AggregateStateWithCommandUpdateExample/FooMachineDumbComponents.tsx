import {Bar, Baz, Foo} from "./AggregateStateExampleModels";
import {FooMachineApi} from "./FooMachineAbstractions";

const notSet = 'NOT SET'

export function FooRender({foo, client}: { foo?: Foo, client: FooMachineApi }) {
    return <div>
        <p>Name: {foo?.name ?? notSet}</p>
        <p>Color: {foo?.color ?? notSet}</p>
        <button onClick={client.getFoo}>Set Foo</button>
    </div>
}

export function BarRender({bar, client}: { bar?: Bar, client: FooMachineApi  }) {
    return <div>
        <p>Name:{bar?.name ?? notSet}</p>
        <p>Age: {bar?.age ?? notSet}</p>
        <button onClick={client.getBar}>Set Bar</button>
    </div>
}

export function BazRender({baz, client}: { baz?: Baz, client: FooMachineApi  }) {
    return <div>
        <p>Name: {baz?.name  ?? notSet }</p>
        <p>Birthday: {baz?.birthday ?? notSet}</p>
        <button onClick={client.getBaz}>Set Baz</button>
    </div>
}
