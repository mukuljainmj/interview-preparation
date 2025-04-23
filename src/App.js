import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <Provider store={appStore}>
      <div className="text-3xl font-bold underline">App</div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
