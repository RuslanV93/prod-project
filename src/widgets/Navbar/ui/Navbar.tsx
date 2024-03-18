import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import style from './Navbar.module.scss';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/Applink';
import ThemeSwitcher from 'shared/ui/themeSwitcher';
interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}></div>
      <Applink
        theme={AppLinkTheme.SECONDARY}
        to={'/'}
        className={classNames(style.mainLink, {}, [className])}
      >
        Главная
      </Applink>
      <Applink theme={AppLinkTheme.SECONDARY} to={'/about'}>
        О сайте
      </Applink>
    </div>
  );
};
