import React from 'react';
import { AuthContext } from '../context/AuthContext';
import BotonCerrarSesion from './BotonCerrarSesion';
import ListEncuestas from './ListEncuestas';

const Home = () => {
    const { auth } = React.useContext(AuthContext);

    return (
        <div className="container-fluid">
            <div className="row justify-content-end">
                <div className="col-4 text-right">
                    <BotonCerrarSesion></BotonCerrarSesion>
                </div>
            </div>
            <center className="mt-5">
                <h1>Encuestas Disponibles</h1>
            </center>
            <div className="row pt-4">
                <ListEncuestas></ListEncuestas>
            </div>
        </div>
    );
};

export default Home;