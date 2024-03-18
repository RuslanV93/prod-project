import { classNames } from 'shared/lib/classNames';
import style from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button className={classNames(style.Button, {}, [className, style[theme]])} {...otherProps}>
      {children}
    </button>
  );
};