import styled from '@emotion/styled';
import { IInfoProps } from './interfaces';

export const InfoWrapper = styled.div<IInfoProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  background: ${(props) => props.backgroundColor};
`;
