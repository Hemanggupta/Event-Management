export interface Route {
  path: string;
  component: React.ComponentType;
  isProtected: boolean;
}

export const ROUTER_CONSTANTS = {
  HOME: '/',
  REGISTER: '/register',
  NOT_FOUND: '*'
};
