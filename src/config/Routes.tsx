import { ReactElement, lazy, LazyExoticComponent } from 'react';

const Page404 = lazy(() => import('../Layout/Ui/NotFoundPage'));
const Page = lazy(() => import('../Pages/Home/Page'));
const Test = lazy(() => import('../Pages/Test/Page'));


interface Route {
  path: string;
  header: string;
  element: ReactElement | LazyExoticComponent<any>;
  withLayout?: boolean;
}

export const routes: Route[] = [
  { path: "*", header: "Error Page", element: <Page404 /> },
  { path: "/", header: "Home Page", element: <Page />, withLayout: true },
  { path: "/test", header: "test Page", element: <Test />, withLayout: false }

];

export const AppRoutes: Record<string, string> = Object.fromEntries(
  routes.map((route) => [route.path, route.header])
);
