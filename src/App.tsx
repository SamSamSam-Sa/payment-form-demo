import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledApp } from './style';
import Content from './layoutComponents/Content';
import PaymentPage from './pages/payment';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Content>
          <Routes>
            <Route path={'/payment'} element={<PaymentPage />} />
            <Route path={'/'} element={<div>kekekekek</div>} />
          </Routes>
        </Content>
      </StyledApp>
    </Router>
  );
};

export default App;
