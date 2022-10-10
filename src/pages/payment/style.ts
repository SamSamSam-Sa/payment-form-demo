import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IInfoProps } from './interfaces';

export const Content = styled(Grid)({
  position: 'relative',
}) as typeof Grid;

export const InfoContainer = styled(Box)<IInfoProps>`
  display: flex;
  flex-direction: column;
  padding: 150px;
  height: 100vh;
  background-image: linear-gradient(
    180deg,
    ${(props) => props.backgroundColor[1]} 0,
    ${(props) => props.backgroundColor[0]} 100%
  );
`;
