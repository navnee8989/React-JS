import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Example from "./Example";
import About from "./About";

import { Suspense } from "react";
import Contect from "./Contect";

const Class = React.lazy(() => import ('./Component/Class/ClassRouting'))
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
        ]
    },
])

export default MainRouting;