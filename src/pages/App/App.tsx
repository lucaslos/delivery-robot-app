import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fillContainer } from '@src/style/utils/fillContainer';
import { theme } from '@src/style/theme';
import { DirectionButton } from '@src/components/DirectionButton';
import Button from '@src/components/Button';
import { gridPos } from '@src/style/utils/grid';
import { inline } from '@src/style/utils/inline';
import { stack } from '@src/style/utils/stack';
import { letterSpacing } from '@src/style/utils/letterSpacing';
import Car from '@src/components/Car';
import { centerContent } from '@src/style/utils/centerContent';
import { useShortCut, useOnKeyPress } from '@src/utils/hooks/useShortCut';
import hotkeys, { KeyHandler } from 'hotkeys-js';

const Container = styled.div`
  ${fillContainer};
  background: ${theme.colors.bg};
  color: white;
  display: grid;
  grid-template-columns: 220px 1fr 120px;
  grid-template-rows: 50px 1fr 120px;
`;

const TurningControls = styled.div`
  ${gridPos(3, 1)};
  padding-left: 36px;
  padding-bottom: 36px;
  align-self: flex-end;
  ${inline({ gap: 18 })};
`;

const SpeedColtrols = styled.div`
  ${gridPos('2 / span 2', 3)};
  padding-right: 36px;
  padding-bottom: 36px;
  align-self: flex-end;
  justify-self: flex-end;
  ${stack({ gap: 18 })};
`;

const Commands = styled.div`
  ${gridPos(2, 1)};
  ${stack({ gap: 8, align: 'stretch' })};
  padding-left: 24px;
  padding-top: 32px;
`;

const TopBar = styled.div`
  ${gridPos(1, '1 / span 3')};
  ${inline()};
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 24px;
  ${letterSpacing(4)};
`;

const CarContainer = styled(Car)`
  ${gridPos('1 / span 3', 2)};
`;

const OrientationWarning = styled.div`
  background: #000;
  ${fillContainer};
  ${centerContent};
  display: none;

  @media screen and (orientation: portrait) {
    display: flex;
  }
`;

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

const App = () => {
  const [lefDoorIsOpen, setLefDoorIsOpen] = useState(false);
  const [rightDoorIsOpen, setRightDoorIsOpen] = useState(false);
  const [isTurningLeft, setIsTurningLeft] = useState(false);
  const [isTurningRight, setIsTurningRight] = useState(false);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [isReversing, setIsReversing] = useState(false);

  useOnKeyPress('w', {
    onPressStart: () => setIsAccelerating(true),
    onPressEnd: () => setIsAccelerating(false),
  });

  useOnKeyPress('s', {
    onPressStart: () => setIsReversing(true),
    onPressEnd: () => setIsReversing(false),
  });

  useOnKeyPress('a', {
    onPressStart: () => setIsTurningLeft(true),
    onPressEnd: () => setIsTurningLeft(false),
  });

  useOnKeyPress('d', {
    onPressStart: () => setIsTurningRight(true),
    onPressEnd: () => setIsTurningRight(false),
  });

  return (
    <Container>
      <TopBar>
        <Title onClick={toggleFullScreen}>Modo de Controle Manual</Title>
      </TopBar>
      {/* TODO: status bar */}
      <CarContainer
        leftDoorIsOpen={lefDoorIsOpen}
        rightDoorIsOpen={rightDoorIsOpen}
        turning={isTurningLeft ? -1 : isTurningRight ? 1 : 0}
        acceleration={isAccelerating ? 1 : isReversing ? -1 : 0}
      />
      <Commands>
        <Button
          label={`${lefDoorIsOpen ? 'Fechar' : 'Abrir'} Porta Esquerda`}
          onClick={() => setLefDoorIsOpen(!lefDoorIsOpen)}
        />
        <Button
          label={`${rightDoorIsOpen ? 'Fechar' : 'Abrir'} Porta Direita`}
          onClick={() => setRightDoorIsOpen(!rightDoorIsOpen)}
        />
      </Commands>
      <TurningControls>
        <DirectionButton
          direction="left"
          onPressStart={() => setIsTurningLeft(true)}
          onPressEnd={() => setIsTurningLeft(false)}
        />
        <DirectionButton
          direction="right"
          onPressStart={() => setIsTurningRight(true)}
          onPressEnd={() => setIsTurningRight(false)}
        />
      </TurningControls>
      <SpeedColtrols>
        <DirectionButton
          direction="up"
          onPressStart={() => setIsAccelerating(true)}
          onPressEnd={() => setIsAccelerating(false)}
        />
        <DirectionButton
          direction="down"
          onPressStart={() => setIsReversing(true)}
          onPressEnd={() => setIsReversing(false)}
        />
      </SpeedColtrols>
      <OrientationWarning>
        <div>Use seu dispositivo na orientação paisagem!</div>
      </OrientationWarning>
    </Container>
  );
};

export default App;
