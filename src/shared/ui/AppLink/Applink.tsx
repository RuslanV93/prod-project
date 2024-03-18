import { classNames } from 'shared/lib/classNames';
import style from './Applink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export const Applink: FC<ApplinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(style.AppLink, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

console.log(style.AppLink);
