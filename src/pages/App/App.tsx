import React from 'react';
import styled from '@emotion/styled';
import { fillContainer } from '@src/style/utils/fillContainer';
import { theme } from '@src/style/theme';
import { DirectionButton } from '@src/components/DirectionButton';
import Button from '@src/components/Button';
import { gridPos } from '@src/style/utils/grid';
import { inline } from '@src/style/utils/inline';
import { stack } from '@src/style/utils/stack';
import { letterSpacing } from '@src/style/utils/letterSpacing';

const Container = styled.div`
  ${fillContainer};
  background: ${theme.colors.bg};
  color: white;
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  grid-template-rows: 50px 1fr 120px;
`;

const SteeringControls = styled.div`
  ${gridPos(3, 1)};
  padding-left: 36px;
  padding-bottom: 36px;
  align-self: flex-end;
  ${inline({ spacing: 18 })};
`;

const SpeedColtrols = styled.div`
  ${gridPos('2 / span 2', 3)};
  padding-right: 36px;
  padding-bottom: 36px;
  align-self: flex-end;
  justify-self: flex-end;
  ${stack({ spacing: 18 })};
`;

const Commands = styled.div`
  ${gridPos(2, 1)};
`;

const TopBar = styled.div`
  ${gridPos(1, '1 / span 3')};
  ${inline()};
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 20px;
  ${letterSpacing(4)};
`;

const App = () => (
  <Container>
    <TopBar>
      <Title>Modo de Controle Manual</Title>
    </TopBar>
    {/* TODO: status bar */}
    {/* TODO: car respresentatition */}
    <Commands>
      <Button label="Abrir Porta Direita" />
      <Button label="Abrir Porta Esquerda" />
    </Commands>
    <SteeringControls>
      <DirectionButton direction="left" />
      <DirectionButton direction="right" />
    </SteeringControls>
    <SpeedColtrols>
      <DirectionButton direction="up" />
      <DirectionButton direction="down" />
    </SpeedColtrols>
  </Container>
);

export default App;
