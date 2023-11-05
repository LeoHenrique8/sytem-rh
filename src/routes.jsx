import React from 'react';
import { BrowserRouter as Router, Routes as Rotas, Route as Rota } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainMenu from './pages/MainMenu';
import BeneficioDesconto from './pages/MainMenu/BeneficioDesconto';


export default function Routes() {
  return (
    <Router>
      <Rotas>
        <Rota path="/" element={<LoginPage />} />
        <Rota path="/mainmenu" element={<MainMenu />} />
        <Rota path="/beneficiodesconto" element={<BeneficioDesconto />} />
      </Rotas>
    </Router>
  );
}
