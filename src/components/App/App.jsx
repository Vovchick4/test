import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "../../config/routes";

export default function App() {
  return (
    <Suspense fallback={<p>Load....</p>}>
      <Routes>
        {routes.map(({ path, component: Component, ...restProps }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
            {...restProps}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
