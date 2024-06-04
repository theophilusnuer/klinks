import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landingpage'
import Footer from './components/footer';
import WhatWeDo from './components/whatWeDo';
import WhoWeAre from './components/whoAreWe';
import Testimonials from './components/testimonials';



function App() {

  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/aboutus', element: <WhoWeAre /> },
    { path: '/footer', element: <Footer /> },
    { path: '/services', element: <WhatWeDo /> },
    { path: '/testimonials', element: <Testimonials /> },
  ]);

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App
