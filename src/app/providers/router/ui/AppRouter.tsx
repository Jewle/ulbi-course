import React, {Suspense} from 'react';
import {Route, Routes} from "react-router";

import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback='Loading'>
            <Routes>
                {Object.values(routeConfig).map(route=>{
                    return <Route element={route.element} path={route.path}></Route>
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
