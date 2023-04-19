import { render } from "@testing-library/react";
import Header from "../header/Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //1. Need to load header by import
  //2.Check logo is loaded or not
  const renderHeader = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //Testing Load
  // console.log("renderHeader", renderHeader);
  const logo = renderHeader.getAllByTestId("logo");
  //console.log("logo", logo);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green", () => {
  const renderHeader = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //Online status
  const onlineStatus = renderHeader.getByTestId("online-status");
  //console.log("onlineStatus", onlineStatus);
  // console.log("logo", logo);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items", () => {
  const renderHeader = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //Online status
  const cartItems = renderHeader.getByTestId("cart");
  //console.log("cart-items", cartItems);
  expect(cartItems.innerHTML).toBe("Cart:0");
});
