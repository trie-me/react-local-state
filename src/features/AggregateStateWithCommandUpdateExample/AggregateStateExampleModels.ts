export interface Foo {
    name:string;
    color: string;
}

export interface Bar {
    name: string;
    age: string;
}

export interface Baz{
    name: string;
    birthday: string;
}

export interface FooBarBazggregate {
    foo?: Foo;
    bar?: Bar;
    baz?: Baz;
}
