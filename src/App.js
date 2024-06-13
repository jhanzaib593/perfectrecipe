import { ConfigProvider } from "antd";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./page/Error/";
import Layout from "./component/layout";
import Home from "./page/Home";
// import Banner from "./component/banner";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
    ],
  },
]);

function App() {
  return (
    <>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
