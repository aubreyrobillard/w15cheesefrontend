import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Show from './pages/Show'
import Index from './pages/Index'
import { oneCheeseLoader } from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"
import { cheeseLoader } from "./loaders"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheeseLoader}></Route>
        <Route path=':id' element={<Show/>} loader={oneCheeseLoader}></Route>
        <Route path='create' action={createAction}></Route>
        <Route path="update/:id" action={updateAction}></Route>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>))
    
    export default router
