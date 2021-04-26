import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';
import AddCostumer from '../components/AddCostumer';
import CostumersList from '../components/CostumersList';
import EditCostumer from '../components/EditCostumer';

const AppRouter = () => {
  const[costumers, setCostumers] = useLocalStorage('costumers', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <CostumersList {...props} costumers={costumers} setCostumers={setCostumers} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddCostumer {...props} costumers={costumers} setCostumers={setCostumers} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditCostumer {...props} costumers={costumers} setCostumers={setCostumers} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;