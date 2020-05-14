import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const Label = styled.div``;

type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
