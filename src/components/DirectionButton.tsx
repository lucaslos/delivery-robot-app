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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  transition: 160ms;

  &:active {
    box-shadow: 0px 0px 16px rgba(86, 204, 242, 0.7);
  }
`;

const rotations = {
  up: 90,
  down: -90,
  left: 0,
  right: -180,
};

type DirectionButtonProps = {
  direction: 'up' | 'left' | 'right' | 'down';
  onPressStart: anyFunction;
  onPressEnd: anyFunction;
  className?: string;
};

export const DirectionButton = ({
  direction,
  onPressStart,
  onPressEnd,
  className,
}: DirectionButtonProps) => (
  <Container
    className={className}
    style={{ transform: `rotate(${rotations[direction]}deg)` }}
    onPointerDown={onPressStart}
    onPointerUp={onPressEnd}
    onContextMenu={e => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }}
  >
    <Icon name="chevron-left" color={theme.colors.secondary} size={50} />
  </Container>
);
