import React from 'react';
import styled from '@emotion/styled';
import Icon from '@src/components/Icon';
import { circle } from '@src/style/utils/circle';
import { centerContent } from '@src/style/utils/centerContent';
import { anyFunction } from '@src/typings/utils';
import { theme } from '@src/style/theme';

const Container = styled.button`
  ${circle(84)};
  background: #002254;
  ${centerContent};
  padding-right: 6px;
`;

const rotations = {
  up: 90,
  down: -90,
  left: 0,
  right: -180,
};

type DirectionButtonProps = {
  direction: 'up' | 'left' | 'right' | 'down';
  onClick: anyFunction;
  className?: string;
};

export const DirectionButton = ({
  direction,
  onClick,
  className,
}: DirectionButtonProps) => (
  <Container
    className={className}
    style={{ transform: `rotate(${rotations[direction]}deg)` }}
    onClick={onClick}
  >
    <Icon name="chevron-left" color="#fff" size={50} />
  </Container>
);
