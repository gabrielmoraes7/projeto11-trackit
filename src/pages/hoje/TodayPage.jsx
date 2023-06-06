import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from './../../components/DataContext';

// Componente que consome o valor do contexto
const Hoje = () => {
  const { data, setData } = useContext(DataContext);

  // Busca os dados da API quando o componente é montado
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/data');
      setData(response.data);
    };

    fetchData();
  }, [setData]);

  return (
    <div>
      <h1>Hoje</h1>
      <p>Dados dos hábitos: {data.habitos}</p>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/calendario">Calendário</Link>
    </div>
  );
};

export default Hoje;
