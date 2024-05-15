import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from './main';
import { AboutLazy } from './about';
import { ShopLazy } from './shop';

import { ComponentLoader } from '@/components/component-loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/about',
        element: (
          <ComponentLoader>
            <AboutLazy />
          </ComponentLoader>
        ),
      },
      {
        path: '/shop',
        element: (
          <ComponentLoader>
            <ShopLazy />
          </ComponentLoader>
        ),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
