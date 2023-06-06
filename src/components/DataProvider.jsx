import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

// Componente que fornece o valor do contexto
const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
  
    return (
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataProvider;
  