import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';
import BotonOpciones from "./BotonOpciones";

const ListEncuestas = () => {
    const [encuestas, setEncuestas] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchEncuestas = async () => {
            try {
                const encuestas = await apiService.getEncuestas(auth);
                setEncuestas(encuestas);
            } catch (error) {
                console.error('Error fetching encuestas', error);
            }
        };
        fetchEncuestas();
    }, [auth]);

    return (

        encuestas.map(encuesta => (
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{encuesta.nombreEncuesta}</h5>
                        <p className="card-text">{encuesta.descripcion}</p>
                        <BotonOpciones to={"/encuesta/" + encuesta.idEncuesta} cn="btn btn-primary" >Ver Encuesta</BotonOpciones>
                        <BotonOpciones to={"/resultados/" + encuesta.idEncuesta} cn="btn btn-success" >Ver Resultados</BotonOpciones>
                    </div>
                </div>
            </div>
        ))
    );
};

export default ListEncuestas;