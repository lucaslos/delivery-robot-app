import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@src/style/theme';
import { motion, AnimationProps } from 'framer-motion';

const Container = styled(motion.svg)`
  overflow: visible;
  display: block;
  padding: 20px;
  box-sizing: content-box;
`;

const opacityKeyframes = [1, 0.4, 1];
const opacityTransitionProps: AnimationProps['transition'] = {
  loop: Infinity,
  duration: 0.7,
};
const pathInitial = {};

type Props = {
  className?: string;
  show: boolean;
  rotation: number;
};

const DirectionIndicator = ({ className, show, rotation }: Props) => (
  <Container
    className={className}
    width="40"
    height="44"
    viewBox="0 0 41 48"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: show ? 1 : 0,
    }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M1.57245 47L20.5724 28L39.5724 47"
      stroke={theme.colors.secondary}
      strokeWidth="2"
      strokeLinecap="round"
      initial={pathInitial}
      animate={{
        opacity: opacityKeyframes,
        rotate: rotation * 6,
      }}
      transition={{
        opacity: {
          ...opacityTransitionProps,
        },
      }}
    />
    <motion.path
      opacity="0.5"
      d="M1.57245 34L20.5724 15L39.5724 34"
      stroke={theme.colors.secondary}
      strokeWidth="2"
      strokeLinecap="round"
      initial={pathInitial}
      animate={{
        opacity: opacityKeyframes,
        x: rotation * 5,
        y: Math.abs(rotation) * -4,
        rotate: rotation * (6 * 3),
      }}
      transition={{
        opacity: {
          ...opacityTransitionProps,
          delay: 0.15,
        },
      }}
    />
    <motion.path
      opacity="0.1"
      d="M1.57245 21L20.5724 2L39.5724 21"
      stroke={theme.colors.secondary}
      strokeWidth="2"
      strokeLinecap="round"
      initial={pathInitial}
      animate={{
        opacity: opacityKeyframes,
        x: rotation * (5 * 3),
        y: Math.abs(rotation) * (-4 * 1.5),
        rotate: rotation * (6 * 6),
      }}
      transition={{
        opacity: {
          ...opacityTransitionProps,
          delay: 0.3,
        },
      }}
    />
  </Container>
);

export default DirectionIndicator;
