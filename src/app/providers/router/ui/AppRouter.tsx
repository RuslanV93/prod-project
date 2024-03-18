import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div className="page-wrapper">Loading...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
