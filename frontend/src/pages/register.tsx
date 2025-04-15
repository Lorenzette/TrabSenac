import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('');
const navigate = useNavigate();

const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
    alert('Por favor, insira um nome válido.');
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    return;
    }

    if (!password || password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
    }

    try {
        await api.post('/auth/register', {
            name,
            email,
            password,
            role,
    });

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
    } catch (error) {
    alert('Erro ao cadastrar. Tente novamente.');
    console.error(error);
    }
};

return (
    <Container>
        <Form onSubmit={handleRegister}>
            <Title>Registro</Title>
            <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
            <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <Select value={role} onChange={e => setRole(e.target.value)}>
                <option value="">Selecione o tipo de usuário</option>
                <option value="estudante">Sou estudante</option>
                <option value="paciente">Quero me consultar</option>
            </Select>
            <Button type="submit">Registrar</Button>
        </Form>
    </Container>
    );
};

export default Register;


const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
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

const Select = styled.select`
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
