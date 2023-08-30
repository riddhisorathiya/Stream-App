import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";



import Invest from "../pages/Invest";
 import PlayVideo from "../pages/PlayVideo";


const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
       
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Invest}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/PlayVideo`} component={PlayVideo}></Route>

        
      </Switch>
    </Suspense>
  );
};
export default Pages;
