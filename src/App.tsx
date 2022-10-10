import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledApp } from './style';
import PaymentPage from './pages/payment';
import Content from './layoutComponents/Content';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Content>
          <Routes>
            <Route path={'/'} element={<PaymentPage />} />
          </Routes>
        </Content>
      </StyledApp>
    </Router>
  );
};

export default App;
