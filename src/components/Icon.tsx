import iconsSet, { JsonIcon } from '@src/icons/iconsSet';
import * as React from 'react';

export type Icons = keyof typeof iconsSet;

type Icon = {
  name: Icons;
  className?: string;
  color?: string;
  size?: number;
};

const Icon = ({ name, className, color = 'currentColor', size = 24 }: Icon) => {
  if (__DEV__ && !iconsSet[name]) throw new Error(`Icon ${name} do not exists`);

  const { viewBox, paths }: JsonIcon = iconsSet[name];

  return (
    <svg
      css={{
        height: size,
        width: size,
        fill: color,
      }}
      className={className}
      viewBox={viewBox}
    >
      {paths &&
        paths.map((attributes, i) => (
          <path
            key={i}
            {...(typeof attributes === 'string'
              ? { d: attributes }
              : attributes)}
          />
        ))}
    </svg>
  );
};

export default Icon;
