import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../../Routes/App.route';
import { AuthorizedProps } from '../../Models/index';
import './Authorized.css';

function Authorized({ isLoggedIn }: AuthorizedProps) {
  const routes = APP_ROUTES;
  return (
    <>
      <div className="container app-wrapper d-flex justify-content-center align-items-center">
        <Routes>
          {routes.map(route => {
            if (!isLoggedIn && route.isProtected) {
              return <Route key={route.path} path={route.path} element={<Navigate replace to="/" />} />;
            } else {
              return <Route key={route.path} path={route.path} Component={route.component} />;
            }
          })}
        </Routes>
      </div>
    </>
  );
}
export default Authorized;
