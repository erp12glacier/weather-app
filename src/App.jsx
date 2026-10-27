
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { NotFound } from './Pages/NotFound';
import { MainLayout } from './Layouts/MainLayout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import Contact from './Pages/Contact';
import { Weather } from './Pages/Weather';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "weather", element: <Weather /> },

      ]

    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
