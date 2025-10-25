import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import ErrorPage from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:restaurantId',
                element: <ResturantMenu />
            }
        ],
        errorElement: <ErrorPage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
// root.render(<AppLayout />);


// root.render(
//     <BrowserRouter>
//         <Header />
//         <Routes>
//             <Route path="/" element={<Body />} />
//             <Route path="/about" element={<About />} />
//         </Routes>
//     </BrowserRouter>
// );

