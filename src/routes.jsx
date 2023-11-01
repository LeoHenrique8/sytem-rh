import React from 'react';
import { BrowserRouter as Router, Routes as Rotas, Route as Rota } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainMenu from './pages/MainMenu';


export default function Routes() {
  return (
    <Router>
      <Rotas>
        <Rota path="/" element={<LoginPage />} />
        <Rota path="/mainmenu" element={<MainMenu />} />
      </Rotas>
    </Router>
  );
}
