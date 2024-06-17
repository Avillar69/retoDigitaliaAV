import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonOpciones = ({ to, children, cn }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to);
    };
    return (
        <button className={cn} onClick={handleClick}>
            {children}
        </button>
    );
};

export default BotonOpciones;