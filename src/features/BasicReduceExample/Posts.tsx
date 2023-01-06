import {Reducer, useReducer} from "react";
import * as PostModels from "./BasicReducerExampleModels"

export function TitlePrinter({message}: { message: string }) {
    return <div style={{border: 'solid 1px red', padding: '20px'}}>{message}</div>
}

function getPosts(count: number): PostModels.BasicReducerExampleModels {
    return ({
        posts: Array.from({length: count})
            .map((v, i) => ({title: i.toString()} as PostModels.Post)),
        count: count
    });
}

let count = 0;

export function Posts() {
    const [s, d] = useReducer((
        state: PostModels.BasicReducerExampleModels, action: { count: number }
    ): PostModels.BasicReducerExampleModels => getPosts(action.count), {posts: [], count: 0});
    return <>
        <h1>Basic Addition Example</h1>
        {...s.posts.map(v => <TitlePrinter message={v.title}></TitlePrinter>)}
        <button onClick={() => d({count: s.count + 1})}>Add another</button>
    </>
}
