import './styles.scss';

import classNames from 'classnames';
import * as React from 'react';

import { ButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={classNames(
          'button',
          `button--${variant}`,
          `button--${size}`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
