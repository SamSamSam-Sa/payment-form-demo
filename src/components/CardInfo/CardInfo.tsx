import React from 'react';
import CardNumber from './components/CardNumber';
import ExpiryDate from './components/ExpiryDate';
import CVCField from './components/CVC';
import { StyledGrid } from './style';

const CardInfo = () => {
  return (
    <>
      <CardNumber value="" />
      <StyledGrid container columns={12}>
        <ExpiryDate value="" />
        <CVCField value="" />
      </StyledGrid>
    </>
  );
};

export default CardInfo;
