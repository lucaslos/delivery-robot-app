import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimationProps } from 'framer-motion';
import { centerContent } from '@src/style/utils/centerContent';
import { fillContainer } from '@src/style/utils/fillContainer';
import { theme } from '@src/style/theme';
import DirectionIndicator from '@src/components/DirectionIndicator';

const Container = styled.div`
  ${centerContent};
`;

const CarContainer = styled(motion.div)`
  width: 160px;
  height: 200px;
  position: relative;
  ${centerContent};

  &::after {
    content: '';
    ${fillContainer};
    border-radius: 8px;
    background: linear-gradient(170.12deg, #8c8c8c 6.3%, #c4c4c4 125.49%);
  }
`;

const Wheel = styled.div`
  position: absolute;
  top: 8px;
  left: -6px;
  right: -6px;
  height: 40px;
  background: #000;

  &.bottom {
    top: auto;
    bottom: 8px;
  }
`;

const DoorsContainer = styled.div`
  position: absolute;
  left: 0;
  width: 4px;
  top: 20px;
  bottom: 20px;

  &.on-right {
    left: auto;
    right: 0;
    transform: rotate(180deg);
  }
`;

const Door = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top;
  width: 100%;
  height: 50%;
  background: ${theme.colors.secondary};

  &.on-bottom {
    top: auto;
    bottom: 0;
    transform-origin: bottom;
  }
`;

const AccelerationIndicator = styled.div`
  position: absolute;
  bottom: 100%;
  margin-bottom: -4px;
`;

const ReverseIndicator = styled.div`
  position: absolute;
  top: 100%;
  transform: rotate(180deg);
  margin-top: -4px;
`;

const doorRotation = 60;

const doorTransition: AnimationProps['transition'] = {
  bounceStiffness: 200,
};

type Props = {
  className?: string;
  leftDoorIsOpen: boolean;
  rightDoorIsOpen: boolean;
  turning: number;
  acceleration: number;
};

const Car = ({
  className,
  leftDoorIsOpen,
  rightDoorIsOpen,
  turning,
  acceleration,
}: Props) => (
  <Container className={className}>
    <CarContainer
      animate={{
        rotate: turning * 20,
      }}
      transition={{
        stiffness: 50,
      }}
    >
      <Wheel />
      <Wheel className="bottom" />

      <DoorsContainer>
        <Door
          animate={{ rotate: leftDoorIsOpen ? doorRotation : 0 }}
          transition={doorTransition}
        />
        <Door
          className="on-bottom"
          animate={{ rotate: leftDoorIsOpen ? -doorRotation : 0 }}
          transition={doorTransition}
        />
      </DoorsContainer>

      <DoorsContainer className="on-right">
        <Door
          animate={{ rotate: rightDoorIsOpen ? doorRotation : 0 }}
          transition={doorTransition}
        />
        <Door
          className="on-bottom"
          animate={{ rotate: rightDoorIsOpen ? -doorRotation : 0 }}
          transition={doorTransition}
        />
      </DoorsContainer>

      <AccelerationIndicator>
        <DirectionIndicator show={acceleration > 0} rotation={turning} />
      </AccelerationIndicator>

      <ReverseIndicator>
        <DirectionIndicator show={acceleration < 0} rotation={turning} />
      </ReverseIndicator>
    </CarContainer>
  </Container>
);

export default Car;
