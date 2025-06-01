import * as React from 'react';
import { sharedInputClasses } from './Input';
import { cn } from '~/utils/cn';

const Textarea: React.FC<React.ComponentProps<'textarea'>> = ({
  className,
  maxLength,
  value: initialValue = '',
  ...props
}) => {
  const [value, setValue] = React.useState(String(initialValue));

  React.useEffect(() => {
    setValue(String(initialValue));
  }, [initialValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (maxLength === undefined || newValue.length <= maxLength) {
      setValue(newValue);
      props.onChange?.(event);
    }
  };

  return (
    <div className="relative">
      <textarea
        className={cn(
          sharedInputClasses,
          'data-[placeholder]:text-muted-foreground flex min-h-[80px]',
          className,
        )}
        {...props}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
      />
      {maxLength !== undefined && (
        <div className="bg-background/10 text-muted-foreground absolute right-2 bottom-1 rounded px-1 py-0.5 text-xs backdrop-blur-[2px]">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

Textarea.displayName = 'Textarea';

export { Textarea };
