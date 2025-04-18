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
<<<<<<< HEAD
import TeamDetails from "./pages/TeamDetails";
=======
import DetailServic from "./pages/DetailServic";
import CategoryDetail from "./components/detailServices/CategoryDetail";
>>>>>>> 364a568954b2e00e0d6144bac9aa2b521da73192

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
      {path:"/detailservic",element:<DetailServic/>},
      // its just component path 
      {path:"/categoryDetail",element:<CategoryDetail/>}
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);


function App() {
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App
