import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await api.post('/auth/login', { email, password });

        const data = res.data as {
            token: string;
            user: {
            role: string;
            };
        };

        localStorage.setItem('token', data.token);

        if (data.user.role === 'estudante') {
            navigate('/dashboard-estudante');
        } else if (data.user.role === 'paciente') {
            navigate('/dashboard-paciente');
        } else {
            alert('Tipo de usuário não reconhecido.');
        }
        } catch (err) {
        alert('Falha no login. Verifique os dados e tente novamente.');
        console.error(err);
        }
        
    };

return (
    <Container>
        <Form onSubmit={handleLogin}>
            <Title>Login</Title>
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit">Entrar</Button>
        </Form>
    </Container>
    );
};

export default Login;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(30deg, #006eff, #ffffff);

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    margin-top: 15px;
    padding: 12px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;
