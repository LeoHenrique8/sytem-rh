import React from 'react';
import { BrowserRouter as Router, Routes as Rotas, Route as Rota } from 'react-router-dom';

import MainPage from './pages/Main/index';


export default function Routes() {
  return (
    <Router>
      <Rotas>
        <Rota path="/" element={<MainPage />} />
      </Rotas>
    </Router>
  );
}
