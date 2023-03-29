import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Body from "./component/Body";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Error from "./utils/Error";
import Contact from "./component/contact/Contact";
import RestrauntMenu from "./component/RestrauntMenu";
import Shimmer from "./utils/Shimmer";
import Profile from "./component/profile/Profile";
import userContext from "./utils/userContext";
//import Offers from "./component/offers/Offers";

const Offers = lazy(() => import("./component/offers/Offers")); //Dynamic import

const AppLayout = () => {
  const[userInfo,setUserInfo] = useState({
    name:"Juhi",
    email:"juhi@gmail.com"
  })
  return (
    <>
    <userContext.Provider value={{user:userInfo}}>
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/Offers",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offers />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
