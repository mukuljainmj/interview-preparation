import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Counter from "./components/Counter";
import GithubUser from "./components/GithubUser";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <Provider store={appStore}>
      <div className="text-3xl font-bold underline">App</div>
      <Counter></Counter>
      <GithubUser></GithubUser>
      <Outlet></Outlet>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
    errorElement: <div>Page not found</div>,
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
