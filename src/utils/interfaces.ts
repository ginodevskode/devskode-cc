export interface User{
    id: number,
    photo_url: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export interface Post{
    id: number,
    user_id: number,
    title: string,
    content: string,
    initialDate: string
}

export interface Following{
    id: number,
    user_id: number,
    following_user_id: number
}

export interface Followers{
    id: number,
    user_id: number,
    following_user_id: number
}

export interface UsersState {
    users: User[];
}

export interface PostsState {
    posts: Post[];
}

export interface signupData{
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    repeat_password: string
}

export interface loginData{
    email: string,
    password: string
}