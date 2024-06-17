import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';
import BotonGrabarVoto from "./BotonGrabarVoto";
import BotonOpciones from "./BotonOpciones";

const EncuestaDetalle = () => {
    const [encuesta, setEncuesta] = useState([]);
    const { auth } = useContext(AuthContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchEncuestas = async () => {
            try {

                const encuesta = await apiService.getEncuestaByID(auth, parseInt(id));
                setEncuesta(encuesta);
            } catch (error) {
                console.error('Error fetching encuesta', error);
            }
        };
        fetchEncuestas();
    }, [auth, id]);

    return (
        <div className="my-4">
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{encuesta.nombreEncuesta}</h5>
                            <p className="card-text">{encuesta.descripcion}</p>
                            {encuesta.opciones && encuesta.opciones.map((opcion) => (
                                <div className="row justify-content-md-center" id={opcion.idOpcion}>
                                    <BotonGrabarVoto idEncuesta={parseInt(id)} idOpcion={opcion.idOpcion} opcion={opcion.descripcion} />
                                </div>
                            ))}
                        </div>
                        <div className="card-footer">
                            <BotonOpciones to={"/"} cn="btn btn-danger" >Regresar</BotonOpciones>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EncuestaDetalle;