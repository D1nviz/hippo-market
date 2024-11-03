import './styles.scss';

import classNames from 'classnames';

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={classNames('max-width-wrapper', className)}>{children}</div>
  );
}
