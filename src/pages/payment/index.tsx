import React from 'react';
import { Content } from './style';
import PaymentContainer from './components/form';
import InfoContainer from './components/info';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { PRODUCTS_INFORMATION } from '../../mockData/mock';

const PaymentPage = () => {
  return (
    <Content container>
      <Grid item md={6} sm={12} xs={12}>
        <InfoContainer>
          <div>{PRODUCTS_INFORMATION}</div>
        </InfoContainer>
      </Grid>
      <Grid item md={6} sm={12} xs={12} component={Paper} elevation={6} square>
        <PaymentContainer />
      </Grid>
    </Content>
  );
};

export default PaymentPage;
