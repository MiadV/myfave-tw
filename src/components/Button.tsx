import React, { forwardRef } from 'react';
import { __DEV__ } from '@/utils/assertions';

/* === Button Element === */

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'solid' | 'outline';
  colorScheme?: 'primary' | 'secondary';
  as?: string;
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      fullWidth = false,
      colorScheme = 'primary',
      className,
      as = 'button',
      isExternal = false,
      ...rest
    },
    ref
  ) => {
    let tempClassNames: string[] = [];

    const sharedClasses = [
      'flex justify-center items-center rounded-md text-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
    ];

    if (fullWidth) sharedClasses.push('w-full');

    // handle variants
    let btnSolidPrimary = ['bg-primary text-white focus:ring-primary'];
    let btnSolidSecondary = [
      'bg-secondary text-white focus:ring-secondary hover:bg-secondary/90 transition-all duration-150',
    ];
    let btnOutlinePrimary = [
      'border border-primary focus:ring-primary text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-primary/50 transition-all duration-150',
    ];
    let btnOutlineSecondary = [
      'border border-secondary focus:ring-secondary text-secondary',
    ];

    // handle colorScheme
    if (variant === 'solid' && colorScheme === 'primary') {
      tempClassNames = [...sharedClasses, ...btnSolidPrimary];
    } else if (variant === 'outline' && colorScheme === 'primary') {
      tempClassNames = [...sharedClasses, ...btnOutlinePrimary];
    } else if (variant === 'solid' && colorScheme === 'secondary') {
      tempClassNames = [...sharedClasses, ...btnSolidSecondary];
    } else if (variant === 'outline' && colorScheme === 'secondary') {
      tempClassNames = [...sharedClasses, ...btnOutlineSecondary];
    }

    let classes = tempClassNames.join(' ');

    let Element = as ? (
      React.createElement(
        as,
        {
          className: `${classes} ${className}`,
          target: isExternal ? '_blank' : undefined,
          rel: isExternal ? 'noopener noreferrer' : undefined,
          ref,
          ...rest,
        },
        children
      )
    ) : (
      <button {...rest} className={`${classes} ${className}`} ref={ref}>
        {children}
      </button>
    );

    return (
      <span className={`relative ${fullWidth ? 'w-full' : undefined}`}>
        {Element}
      </span>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'Button';
}
