import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import MainLayout from "./MainLayout";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Skills", element: <Skills /> },
        { path: "Experience", element: <Experience /> },
        { path: "Work", element: <Work /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
