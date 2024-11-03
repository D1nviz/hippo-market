import './styles.scss';

import classNames from 'classnames';
import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
};

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={classNames('label', className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
