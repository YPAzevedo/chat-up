import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from "./pages/Chat";
import Join from "./pages/Join";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
