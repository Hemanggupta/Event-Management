import { DetailForm, Home, OptRegistration, PageNotFound, Route, ROUTER_CONSTANTS } from './routes.model';

export const APP_ROUTES: Route[] = [
  {
    path: ROUTER_CONSTANTS.HOME,
    component: Home,
    isProtected: false
  },
  {
    path: ROUTER_CONSTANTS.REGISTER,
    component: OptRegistration,
    isProtected: false
  },
  {
    path: ROUTER_CONSTANTS.NOT_FOUND,
    component: PageNotFound,
    isProtected: false
  },
  {
    path: ROUTER_CONSTANTS.FORM,
    component: DetailForm,
    isProtected: false
  }
];
