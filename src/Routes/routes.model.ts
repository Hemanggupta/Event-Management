export interface Route {
  path: string;
  component: React.ComponentType;
  isProtected: boolean;
}

export const ROUTER_CONSTANTS = {
  HOME: '/',
  REGISTER: '/register',
  FORM: '/form',
  NOT_FOUND: '*'
};

import { lazy } from 'react';

import Home from './../Pages/Home/Home';
const PageNotFound = lazy(() => import('./../Pages/NotFound/PageNotFound'));
const OptRegistration = lazy(() => import('../Pages/MobileNumberRegistration3/MobileNumberRegistration'));
const DetailForm = lazy(() => import('../Pages/DetailForm/DetailForm'));

export { DetailForm, Home, OptRegistration, PageNotFound };
