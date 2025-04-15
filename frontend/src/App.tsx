import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import EstudanteDashboard from './pages/estudanteDashboard';
import PacienteDashboard from './pages/pacienteDashboard';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    padding: 0;
    margin: 0;
`;

function App() {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard-estudante" element={<EstudanteDashboard />} />
                    <Route path="/dashboard-paciente" element={<PacienteDashboard />} />
                  </Routes>
            </Container>
        </Router>
    );
}

export default App;
