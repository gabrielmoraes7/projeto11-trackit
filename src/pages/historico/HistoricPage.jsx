import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './../../components/DataContext';

// Componente que consome o valor do contexto
const Calendario = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>Calendário</h1>
      <p>Dados dos hábitos: {data.habitos}</p>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">Hoje</Link>
    </div>
  );
};

export default Calendario;
