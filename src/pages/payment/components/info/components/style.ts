import { styled } from '@mui/system';
import Card from '@mui/material/Card';

export const StyledCard = styled(Card)(
  ({ theme }) => `
  display: flex;
  background: transparent;
  ${theme.breakpoints.between('lg', 'sm')} {
    flex-direction: column;  
  }`
);
