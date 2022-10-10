import React from 'react';
import { ContentBlock } from './style';

const Content = ({ children }: { children: React.ReactNode }) => {
  return <ContentBlock>{children}</ContentBlock>;
};

export default Content;
