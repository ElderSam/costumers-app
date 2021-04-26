import React from 'react';
import _ from 'lodash';
import Costumer from './Costumer';

const CostumersList = ({ costumers, setCostumers }) => {

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