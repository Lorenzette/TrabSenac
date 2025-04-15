import React from 'react';
import styled from 'styled-components';



const EstudanteDashboard = () => {
    const handleCriarConvite = () => {
    alert("Convite fictício para atendimento criado!");
    };

    return (
        <Container>
        <Title>Bem-vindo, Estudante!</Title>

        <MessagePanel>
            <h3>Painel de Mensagens</h3>
            <Message>Mensagem de exemplo 1</Message>
            <Message>Mensagem de exemplo 2</Message>
        </MessagePanel>

        <Button onClick={handleCriarConvite}>Criar convite de atendimento</Button>
        </Container>
    );
};

export default EstudanteDashboard;


const Container = styled.div`
    padding: 40px;
    background-color: #f9fafb;
    min-height: 100vh;
`;

const Title = styled.h1`
    color: #2c3e50;
`;

const MessagePanel = styled.div`
    margin-top: 20px;
`;

const Message = styled.div`
    padding: 12px;
    margin-bottom: 10px;
    background-color: #ecf0f1;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 10px 16px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #27ae60;
    }
`;