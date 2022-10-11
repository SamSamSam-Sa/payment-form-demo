import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Content = styled(Grid)(
  ({ theme }) => `
  position: relative;
  ${theme.breakpoints.down('md')} {
    height: 100vh;
  }`
) as typeof Grid;

export const InfoContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: 130px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    ${theme.palette.primary.dark} 0,
    ${theme.palette.primary.main} 100%
  );
  ${theme.breakpoints.down('lg')} {
    padding: 50px;
  }
  ${theme.breakpoints.down('md')} {
    height: 100%;
  }
`
);

export const GridItem = styled(Grid)(
  `
  transition: all 0.4s;
  `
) as typeof Grid;
