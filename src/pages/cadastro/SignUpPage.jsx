import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from './../../components/DataContext';
import styled from 'styled-components';


// Componente de login
export default function Cadastro(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
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
    const data = 
    {
        email: email,
        name: name,
        image: image,
        password: password
    };
    console.log(data)
   /*
    try {
      // Envia a solicitação POST com os dados do formulário e o token de portador
      const response = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        data
      );
   
      // Lidar com a resposta aqui
      setData(response.data);
        console.log("cadastrei")
        console.log(data)
      // Redireciona para a rota /habitos em caso de sucesso no login
      navigate('/');
    } catch (error) {
      // Lidar com o erro aqui
      console.log(error);
      console.log(data);
      setError(true);
      setEmail('');
      setPassword('');
      setImage('');
      setName('');
    }*/

    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email,
            name,
            image,
            password
            }).then(res => {
            console.log("mandou")
            navigate('/');
            setData(res.data);
            console.log("cadastrei")
            console.log(res)
             })
            .catch(error => {
            console.error(error);
            setError(true);
            setEmail('');
            setPassword('');
            setImage('');
            setName('');
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
          required
        />
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={loading}
          required
        />
        <Input
          type="text"
          placeholder="Imagem"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          disabled={loading}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Cadastrar'}
        </Button>
        <Link to="/">
            <SignupText>Já tem uma conta?Faça login!</SignupText>
        </Link>
      </Form>
    </Container>
  );
};

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
  font-size: 14px;
`;



    