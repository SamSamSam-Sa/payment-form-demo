import React from 'react';
import { InfoWrapper } from './style';
import { useTheme } from '@mui/material/styles';

const InfoContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return <InfoWrapper backgroundColor={theme.palette.primary.main}>{children}</InfoWrapper>;
};

export default InfoContainer;
