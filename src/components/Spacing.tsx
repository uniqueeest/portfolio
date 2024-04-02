import { memo, HTMLAttributes } from 'react';

export type SpacingProps = {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
} & HTMLAttributes<HTMLDivElement>;

export const Spacing = memo(function Spacing({
  direction = 'vertical',
  size,
  ...props
}: SpacingProps) {
  return (
    <div
      style={{
        flex: 'none',
        width: direction === 'horizontal' ? `${size}px` : undefined,
        height: direction === 'vertical' ? `${size}px` : undefined,
      }}
      {...props}
    />
  );
});
