import React, { useState, useEffect } from "react";
import CostumerAPI from "../services/api";

const CostumerContext = React.createContext();
const CostumerProvider = (props) => {
    const [costumers, setCostumers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCostumer = () => {
        CostumerAPI().fetchAll()
            .then((response) => {
                //console.log(response.data);
                const { listCostumers } = response.data;
                setCostumers(listCostumers);
                setLoading(false);
                //console.log(listCostumers);
            })
            .catch((err) => getReqError(err));
    };

    const create = (data, history) => {
        CostumerAPI().create(data)
            .then((response) => {
                //console.log(response);
                alert('cadastrado com sucesso!')
                history.push('/')
                fetchCostumer()
            })
            .catch((err) => getReqError(err));
    };

    const update = (id, data, history) => {
        CostumerAPI().update(id, data)
            .then((response) => {
                console.log(response);
                alert('atualizado com sucesso!')
                history.push('/');
                fetchCostumer()
            })
            .catch((err) => getReqError(err));
    };

    const Delete = (id) => {
        CostumerAPI().delete(id)
            .then((response) => {
                //console.log(response);
                alert('Excluído com sucesso!')
                fetchCostumer()
            })
            .catch((err) => getReqError(err));
    };

    const getReqError = (err) => {
        if(err.response) {
            console.log(err.response.data);
            alert('Erro na requisição')
        }
        console.warn(err) 
    }

    useEffect(() => {
        fetchCostumer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CostumerContext.Provider
        value={{
            loading,
            costumers,
            create,
            update,
            Delete
        }}
        >
        {props.children}
        </CostumerContext.Provider>
    );
};

const CostumerConsumer = CostumerContext.Consumer;
export { CostumerProvider, CostumerConsumer, CostumerContext };