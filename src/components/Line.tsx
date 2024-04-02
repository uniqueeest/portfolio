import { HTMLAttributes } from 'react';

interface LineProps extends HTMLAttributes<HTMLHRElement> {
  border?: number;
  color?: string;
}

export const Line = ({ border, color }: LineProps) => {
  return (
    <hr
      style={{
        width: '100%',
        borderBottom: `${border ? border : '1'}px solid ${
          color ? color : '#dee2e6'
        }`,
      }}
    />
  );
};
