import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from './../../components/DataContext';
import styled from 'styled-components';

// Componente de login
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  // Manipulação do formulário de login
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
   
    // Cria um objeto com os dados do formulário
    const data = {
      email,
      password  
    };
   /*
    try {
      // Envia a solicitação POST com os dados do formulário e o token de portador
      const response = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{email, pass}
        
      );
   
      // Lidar com a resposta aqui
      setData(response.data);
      console.log("loguei")
      console.log(data)
      console.log(response.data)
      // Redireciona para a rota /habitos em caso de sucesso no login
      navigate('/habitos');
    } catch (error) {
      // Lidar com o erro aqui
      console.log(error);
      console.log(data);
      setError(true);
      setEmail('');
      setPassword('');
    }*/

    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email,
            password
            }).then(res => {
            console.log("mandou")
            navigate('/habitos');
            setData(response.data);
            console.log("loguei")
            console.log(res)
             })
            .catch(error => {
            console.error(error);
            setError(true);
            setEmail('');
            setPassword('');
            });
   
    setLoading(false);
   };
   
   
  return (
    <Container>
        <LogoContainer>    
            <Logo src="data:image/jpeg;base64,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" alt="Logo" />
            <Title>TrackIt</Title>
        </LogoContainer>    
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
          style={{ borderColor: error ? 'red' : '' }}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
          style={{ borderColor: error ? 'red' : '' }}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Logar'}
        </Button>
        <Link to="/cadastro">
            <SignupText>Não tem uma conta?Cadastre-se</SignupText>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginPage;

const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const LogoContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
`;

const Title = styled.h1`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;

text-align: center;

color: #126BA5;
`;

const Input = styled.input`
    width: 300px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
    padding-left: 8px;
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  background: #52B6FF;
  border-radius: 4.63636px;
`;

const SignupText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
`;
