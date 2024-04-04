interface FlexProps {
  align?: string;
  justify?: string;
  direction?: 'column' | 'row';
  gap?: number;
  className?: string;
  children: React.ReactNode;
}

export const Flex = ({
  align = 'center',
  justify = 'center',
  direction = 'column',
  gap,
  className,
  children,
}: FlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: gap && `${gap}px`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
