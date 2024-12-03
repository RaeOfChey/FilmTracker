import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage';
import FilmSearch from './pages/FilmSearch';
import SeenIt from './pages/SeenIt';
import WatchList from './pages/WatchList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <FilmSearch />,
            },
            {
                path: '/WatchList',
                element: <WatchList />,
            },
            {
                path: '/SeenIt',
                element: <SeenIt />,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}