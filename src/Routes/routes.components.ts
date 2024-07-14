import { lazy } from 'react';

const Home = lazy(() => import('./../Pages/Home/Home'));
const PageNotFound = lazy(() => import('./../Pages/NotFound/PageNotFound'));
const OptRegistration = lazy(() => import('./../Pages/OTP-Registration/OptRegistration'));

export { Home, OptRegistration, PageNotFound };
