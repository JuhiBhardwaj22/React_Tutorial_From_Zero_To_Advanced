import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import store from "./utils/store";
import { Provider } from "react-redux";
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
import Cart from "./component/cart/Cart";
import SignIn from "./component/login/SingIn";

const Offers = lazy(() => import("./component/offers/Offers")); //Dynamic import

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Juhi",
    email: "juhi@gmail.com",
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: userInfo }}>
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
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
            path: "/cart",
            element: <Cart />,
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
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Error />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
