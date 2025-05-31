import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Join from "./join.jsx";
import WritePost from "./WritePost.jsx";
import { AuthProvider } from "./AuthContext";
// 이거 함 들으면서 해봐
// https://www.youtube.com/watch?v=ueufxzUjsS0&t=1795s

// 나 내꺼 만들고있을게
// 필요하면 디코해
// ㅇㅋ

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "writepost",
        element: <WritePost />,
      },
      {
        path: "myposts",
        element: <WritePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
