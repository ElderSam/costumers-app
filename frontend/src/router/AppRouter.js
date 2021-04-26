import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import CostumersContext from '../context/CostumersContext';

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
          <CostumersContext.Provider value={{ costumers, setCostumers }}>
            <Switch>
              <Route component={CostumersList} path="/" exact={true} />
              <Route component={AddCostumer} path="/add" />
              <Route component={EditCostumer} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CostumersContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;