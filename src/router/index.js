import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
]