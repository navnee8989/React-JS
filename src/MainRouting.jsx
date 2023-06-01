import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Example from "./Example";
import About from "./About";

import { Suspense } from "react";
import Contect from "./Contect";

const Class = React.lazy(() => import ('./Component/Class/ClassRouting'))
const Functional = React.lazy(() => import('./Component/Functional/FunctionRouting'))
const MainRouting = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Contect",
        element: <Contect />,
    },
    {
        path: "/Example",
        element: <Example />,
        children:[
            {
                path: "Class/*",
                element: <Suspense fallback={<h2>Loading....</h2>}> <Class /> </Suspense>,
            },
           {
            path: "Functional/*",
            element: <Suspense fallback={<h1>PLease WAit a Second</h1>}><Functional/></Suspense>
           }
        ]
    },
])

export default MainRouting;