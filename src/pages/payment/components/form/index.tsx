import React from 'react';
import { PaymentWrapper, StyledDivider } from './style';
import { DIVIDER_TEXT } from '../../../../mock/mock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardInfo from '../../../../components/CardInfo/CardInfo';

const PaymentContainer = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('TCL ~ file: index.tsx ~ line 15 ~ handleSubmit ~ data', data);
  };

  return (
    <PaymentWrapper>
      <StyledDivider>{DIVIDER_TEXT}</StyledDivider>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth id="email" label="Email" name="email" />
        <CardInfo />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Pay
        </Button>
      </Box>
    </PaymentWrapper>
  );
};

export default PaymentContainer;
