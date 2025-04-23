import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return <div>App</div>;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
