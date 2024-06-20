import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Archive from './pages/Archive.jsx';
// import AboutMe from './components/pages/AboutMe.jsx';
// import Portfolio from './components/pages/Portfolio.jsx';
// import Resume from './components/pages/Resume.jsx';
// import Contact from './components/pages/Contact.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Archive',
        element: <Archive />,
      },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
