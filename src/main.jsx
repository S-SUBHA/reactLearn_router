import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ResponsiveComponent from "./components/ResponsiveComponent/ResponsiveComponent.jsx";
import Github, { githubInfoLoader } from "./components/GitHub/index.js";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,
//     },
//   ]
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="responsiveComponent/:userId"
        element={<ResponsiveComponent />}
      />
      <Route
        loader={() => githubInfoLoader(`S-SUBHA`)}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
