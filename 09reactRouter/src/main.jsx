import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import {
    Home,
    About,
    Contact,
    Github,
    githubInfoLoader,
} from "./components/index.js";
import Layout from "./Layout.jsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "About",
//                 element: <About />,
//             },
//             {
//                 path: "Contact",
//                 element: <Contact />,
//             },
//             {
//                 path: "Github",
//                 loader: githubInfoLoader,
//                 element: <Github />,
//             },
//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route
                path="Github"
                element={<Github />}
                loader={githubInfoLoader}
            />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>
);
