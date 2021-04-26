import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { CostumerProvider } from '../context/index';

import Header from '../components/Header';
import AddCostumer from '../components/AddCostumer';
import CostumersList from '../components/CostumersList';
import EditCostumer from '../components/EditCostumer';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <CostumerProvider>
            <Switch>
              <Route component={CostumersList} path="/" exact={true} />
              <Route component={AddCostumer} path="/add" />
              <Route component={EditCostumer} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CostumerProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;