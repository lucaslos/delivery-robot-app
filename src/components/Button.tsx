import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@src/style/theme';
import { inline } from '@src/style/utils/inline';
import { letterSpacing } from '@src/style/utils/letterSpacing';
import { anyFunction } from '@src/typings/utils';

const Container = styled.button`
  ${inline({ justify: 'center' })};
  padding: 6px 20px;
  background: ${theme.colors.quaternary};
  border-radius: 100px;
`;

const Label = styled.div`
  color: ${theme.colors.secondary};
  ${letterSpacing(2)};
`;

type Props = {
  label: string;
  onClick: anyFunction;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <Container onClick={onClick} onMouseDown={e => e.preventDefault()}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
