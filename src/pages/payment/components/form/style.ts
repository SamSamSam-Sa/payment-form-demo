import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export const PaymentWrapper = styled('div')(
  ({ theme }) => `
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${theme.breakpoints.up('lg')} {
    padding: 100px;
  };
  ${theme.breakpoints.down('lg')} {
    padding: 70px;
  };
  ${theme.breakpoints.down('md')} {
    padding: 50px 20px;
    height: 100%;
  }`
);

export const StyledDivider = styled(Divider)`
  width: 100%;
  align-items: flex-start;
`;

export const StyledFormWrapper = styled(Box)``;
