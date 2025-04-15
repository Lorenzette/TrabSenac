import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <ButtonGroup>
                    <StyledButton onClick={() => navigate('/login')}>Login</StyledButton>
                    <StyledButton onClick={() => navigate('/register')}>Registrar</StyledButton>
                </ButtonGroup>
            </Header>
            <Title>Bem-vindo à Plataforma de Atendimento Estudantil</Title>
            <Description>
            Conectamos estudantes universitários (como de Psicologia e Direito) com pessoas que precisam de ajuda gratuita.
            Os estudantes ganham experiência e os usuários recebem orientação de forma acessível e humana.
            </Description>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    padding: 40px;
    height: 100vh;
    text-align: center;
    background: linear-gradient(30deg, #006eff, #ffffff);
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledButton = styled.button`
    background-color: #0661c2;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-top: 80px;
`;

const Description = styled.p`
    font-size: 18px;
    max-width: 600px;
    margin: 20px auto;
`;