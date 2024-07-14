import { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../../Routes/App.route';
import './Authorized.css';

export const MobileContext = createContext<any>(null);

function Authorized() {
  const routes = APP_ROUTES;
  const [mobileNumber, setMobileNumber] = useState<number | null>(null);
  return (
    <>
      <MobileContext.Provider value={{ mobileNumber, setMobileNumber }}>
        <div className="container app-wrapper d-flex justify-content-center align-items-center">
          <Routes>
            {routes.map(route => {
              if (!mobileNumber && route.isProtected) {
                return <Route key={route.path} path={route.path} element={<Navigate replace to="/" />} />;
              } else {
                return <Route key={route.path} path={route.path} element={<route.component />} />;
              }
            })}
          </Routes>
        </div>
      </MobileContext.Provider>
    </>
  );
}
export default Authorized;
