import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from './../../components/DataContext';

// Componente que consome o valor do contexto
const Habitos = () => {
  const { data, setData } = useContext(DataContext);

  // Manipulação dos dados do contexto
  const handleDataChange = async (event) => {
    const newData = { ...data, habitos: event.target.value };
    setData(newData);

    // Envia os dados para a API
    await axios.post('/api/data', newData);
  };

  return (
    <div>
      <h1>Hábitos</h1>
      <input type="text" onChange={handleDataChange} />
      <Link to="/hoje">Hoje</Link>
      <Link to="/calendario">Calendário</Link>
    </div>
  );
};

export default Habitos;
