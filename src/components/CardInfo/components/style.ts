import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledMaskedCardAdditional = styled(TextField)(
  ({ theme }) => `
  width: 47%;
  ${theme.breakpoints.down('sm')} {
    width: 45%;
  }`
);
