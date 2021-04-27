import React, { useContext } from 'react';

import { CostumerContext } from '../context/index';
import CostumerForm from './CostumerForm';

const AddCostumer = ({ history }) => {
  const appContext = useContext(CostumerContext);

  const handleOnSubmit = async(costumer) => {
    appContext.create(costumer, history) // add new costumer
  };

  return (
    <React.Fragment>
      <CostumerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCostumer;