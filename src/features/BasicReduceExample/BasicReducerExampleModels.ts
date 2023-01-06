export interface Post {
    title: string;
    slug: string;
    link: string;
}

export interface BasicReducerExampleModels {
    posts: Post[]
    count: number;
}
