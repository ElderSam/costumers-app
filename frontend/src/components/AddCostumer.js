import React, { useContext } from 'react';

import CostumersContext from '../context/CostumersContext';
import CostumerForm from './CostumerForm';

const AddCostumer = ({ history }) => {
  //const {  } = useContext(CostumersContext);

  const handleOnSubmit = (costumer) => {
    //setCostumers([costumer, ...costumers]); // add new costumer

    history.push('/');
  };

  return (
    <React.Fragment>
      <CostumerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCostumer;