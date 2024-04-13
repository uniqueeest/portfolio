import { cn } from '@/utils';

const flexDirectionClass: Record<string, string> = {
  row: 'flex-row',
  column: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

const alignItemsClass: Record<string, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifyContentClass: Record<string, string> = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

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
  const flexClasses = cn(
    'flex',
    flexDirectionClass[direction],
    alignItemsClass[align],
    justifyContentClass[justify],
    className
  );

  return (
    <div
      style={{
        gap: gap && `${gap}px`,
      }}
      className={flexClasses}
    >
      {children}
    </div>
  );
};
