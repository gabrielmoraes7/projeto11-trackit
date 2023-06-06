import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataProvider from './components/DataProvider';
import Habitos from './pages/habito/HabitPage';
import Hoje from './pages/hoje/TodayPage';
import Calendario from './pages/historico/HistoricPage';
import LoginPage from './pages/login/LoginPage';
import Cadastro from './pages/cadastro/SignUpPage'
import styled from 'styled-components';

// Componente principal que renderiza os outros componentes
const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/calendario" element={<Calendario />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
