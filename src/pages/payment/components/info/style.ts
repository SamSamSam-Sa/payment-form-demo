import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';

export const InfoWrapper = styled('div')`
  width: 100%;
  max-height: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const StyledDivider = styled(Divider)`
  width: 100%;
  align-items: flex-start;
  padding-top: 50px;
`;
