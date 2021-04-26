import React, { useState, useEffect } from "react";
import CostumerAPI from "../services/api";

const CostumerContext = React.createContext();
const CostumerProvider = (props) => {
    const [costumers, setCostumers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCostumer = async () => {
        CostumerAPI()
        .fetchAll()
        .then((response) => {
            console.log(response.data);
            const { listCostumers } = response.data;
            setCostumers(listCostumers);
            setLoading(false);
            console.log(listCostumers);
        })
        .catch((err) => console.warn(err));
    };

    const Delete = (id) => {
        CostumerAPI()
        .delete(id)
        .then((response) => {
            console.log(response);
            fetchCostumer()
        })
        .catch((err) => console.warn(err));
    };

    useEffect(() => {
        fetchCostumer();
    }, []);

    return (
        <CostumerContext.Provider
        value={{
            loading,
            costumers,
            Delete
        }}
        >
        {props.children}
        </CostumerContext.Provider>
    );
};

const CostumerConsumer = CostumerContext.Consumer;
export { CostumerProvider, CostumerConsumer, CostumerContext };