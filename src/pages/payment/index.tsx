import React from 'react';
import { Content, InfoContainer, GridItem } from './style';
import PaymentContainer from './components/form';
import Info from './components/info';
import Paper from '@mui/material/Paper';

const PaymentPage = () => {
  return (
    <Content container>
      <GridItem item lg={6} md={5} sm={12} xs={12}>
        <InfoContainer>
          <Info />
        </InfoContainer>
      </GridItem>
      <GridItem item lg={6} md={7} sm={12} xs={12} component={Paper} elevation={6} square>
        <PaymentContainer />
      </GridItem>
    </Content>
  );
};

export default PaymentPage;
