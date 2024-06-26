import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import style from './Applink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  isActive: boolean;
}
export const Applink: FC<ApplinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(style.AppLink, { [style[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

console.log(style.AppLink);
