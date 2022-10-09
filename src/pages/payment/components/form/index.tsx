import React from 'react';
import { PaymentWrapper, StyledDivider } from './style';
import { DIVIDER_TEXT } from '../../../../mockData/mock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardInfo from '../../../../components/CardInfo';

const PaymentContainer = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <PaymentWrapper>
      <StyledDivider>{DIVIDER_TEXT}</StyledDivider>
      <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <CardInfo />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </Box>
    </PaymentWrapper>
  );
};

export default PaymentContainer;
