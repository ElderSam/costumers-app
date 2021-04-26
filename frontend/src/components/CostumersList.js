import React, { useContext } from 'react';
import _ from 'lodash';

import CostumersContext from '../context/CostumersContext';
import Costumer from './Costumer';

const CostumersList = () => {
  const { costumers, setCostumers } = useContext(CostumersContext);

  const handleRemoveCostumer = (id) => {
    setCostumers(costumers.filter((costumer) => costumer.id !== id));
  };

  return (
    <React.Fragment>
      <div className="costumer-list">
        {!_.isEmpty(costumers) ? (
          costumers.map((costumer) => (
            <Costumer key={costumer.id} {...costumer} handleRemoveCostumer={handleRemoveCostumer} />
          ))
        ) : (
          <p className="message">Nenhum cliente cadastrado. Por favor adicione algum cliente.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CostumersList;