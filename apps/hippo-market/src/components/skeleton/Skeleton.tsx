import './styles.scss';

import classNames from 'classnames';
export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames('skeleton', className)} {...props} />;
}
