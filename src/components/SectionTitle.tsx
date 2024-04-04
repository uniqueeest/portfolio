import { HTMLAttributes } from 'react';

import clsx from 'clsx';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
  tag: Tag = 'h2',
  ...props
}: SectionTitleProps) => {
  return (
    <Tag
      className={clsx(
        'text-18 font-medium leading-normal p-0 m-0',
        SIZE_DATA[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
