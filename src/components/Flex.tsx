interface FlexProps {
  align?: string;
  justify?: string;
  direction?: 'column' | 'row';
  gap?: number;
  children: React.ReactNode;
}

export const Flex = ({
  align = 'center',
  justify = 'center',
  direction = 'column',
  gap,
  children,
}: FlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};
