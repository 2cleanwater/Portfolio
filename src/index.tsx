import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, path:"/", element: <MainPage/>
      }
    ]
  }
]);
root.render(
  <RouterProvider router={router}/>
);
