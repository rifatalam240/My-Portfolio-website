import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../root/Root";
import Home from "../components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,children:[{path:"/",index:true,Component:Home}],
  },
]);