import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PageNotFound from "./components/PageNotFound";
import TeamDetails from "./pages/TeamDetails";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/projects", element: <Projects /> },
      { path: "/services", element: <Services /> },
      { path: "/team", element: <Team /> },
      { path: "/teamdetails/:id", element: <TeamDetails /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);


function App() {
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App
