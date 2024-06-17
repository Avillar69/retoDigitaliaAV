import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const BotonGrabar = ({ idEncuesta, idOpcion, opcion }) => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const handleVoto = async () => {
        const voto = {
            idEncuesta, idOpcion, EncuestaOpcion : {
                idOpcion, idEncuesta, Encuesta: {
                    idEncuesta
                }
            }
        }
        await apiService.postVotacion(auth, voto);
        navigate("/");
    };

    return (
        <button className="btn btn-primary mt-1 col-md-4" onClick={handleVoto}>
            {opcion}
        </button>
    );
};

export default BotonGrabar;