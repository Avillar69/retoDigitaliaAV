import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonCerrarSesion = () => {
    const navigate = useNavigate();

    const handleSesion = async () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <button className="btn btn-danger mt-1 col-md-4" onClick={handleSesion}>
            Cerrar Sesión
        </button>
    );
};

export default BotonCerrarSesion;