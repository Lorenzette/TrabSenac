import React from 'react';
import styled from 'styled-components';



const PacienteDashboard = () => {
    const handleSolicitarAtendimento = () => {
        alert("Solicitação fictícia de atendimento enviada!");
    };

    return (
        <Container>
        <Title>Bem-vindo, Paciente!</Title>

        <MessagePanel>
            <h3>Painel de Mensagens</h3>
            <Message>Mensagem de exemplo 1</Message>
            <Message>Mensagem de exemplo 2</Message>
        </MessagePanel>

        <Button onClick={handleSolicitarAtendimento}>Solicitar atendimento</Button>
        </Container>
    );
};

export default PacienteDashboard;


const Container = styled.div`
    padding: 40px;
    background-color: #f9fafb;
    min-height: 100vh;
`;

const Title = styled.h1`
    color: #34495e;
`;

const MessagePanel = styled.div`
    margin-top: 20px;
`;

const Message = styled.div`
    padding: 12px;
    margin-bottom: 10px;
    background-color: #dff9fb;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 10px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
    background-color: #2980b9;
    }
`;