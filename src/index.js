import tabs from './tabs.json';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tab from './Tab';

const router = createBrowserRouter([
    ...tabs.tabs.map((tab) => ({
        path: `test-react/${tab.path}`,
        element: (
            <React.Suspense fallback={<>loading</>}>
                <Tab id={tab.id} />
            </React.Suspense>
        ),
    })),
    {
        path: 'test-react/',
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
