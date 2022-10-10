import React from 'react';
import { Content, InfoContainer } from './style';
import PaymentContainer from './components/form';
import Info from './components/info';
import { Grid, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';

const PaymentPage = () => {
  const theme = useTheme();

  return (
    <Content container>
      <Grid item md={6} sm={12} xs={12}>
        <InfoContainer backgroundColor={[theme.palette.primary.main, theme.palette.primary.dark]}>
          <Info />
        </InfoContainer>
      </Grid>
      <Grid item md={6} sm={12} xs={12} component={Paper} elevation={6} square>
        <PaymentContainer />
      </Grid>
    </Content>
  );
};

export default PaymentPage;
