import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import EncuestaDetalle from './components/EncuestaDetalle';
import EncuestaResultados from './components/EncuestaResultados';


const ProtectedRoute = ({ children }) => {
    const { auth } = React.useContext(AuthContext);
    console.log(auth);
    return auth ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/encuesta/:id" element={<ProtectedRoute><EncuestaDetalle /></ProtectedRoute>} />
                    <Route path="/resultados/:id" element={<ProtectedRoute><EncuestaResultados /></ProtectedRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;