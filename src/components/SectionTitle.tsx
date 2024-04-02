import { HTMLAttributes } from 'react';

import { cn } from '@/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const SIZE_DATA = {
  small: 'text-24 font-bold',
  medium: 'text-32 font-bold',
  large: 'text-40 font-bold',
};

export const SectionTitle = ({
  className,
  children,
  size = 'medium',
  ...props
}: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        'text-18 font-medium leading-normal p-0 m-0',
        SIZE_DATA[size],
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
