import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

interface LineProps extends HTMLAttributes<HTMLHRElement> {
  border: number;
  color: string;
}

export const Line = ({ border, color }: LineProps) => {
  return (
    <hr
      className={
        (cn('w-full border border-gray200'),
        `border-[${border}px]`,
        `border-${color}`)
      }
    />
  );
};
