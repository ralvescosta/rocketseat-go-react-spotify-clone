import React from "react";

import { Switch, Route } from "react-router-dom";

import { Browse } from "../pages";
//Nao foi colocado o BrowserRouter neste componente pois o BrowserRouter da acesso
//a parametros de navegação como por exemplo query params e get params desta forma
//se colocado do BrowserRoutes neste arquivo na estrutura do App não seria possivel
//te acesso a estes parametros nos outros componenetes
const routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default routes;
