import { classNames } from 'shared/lib/classNames';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/Applink';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links} />
      <Applink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={classNames(style.mainLink, {}, [className])}
      >
        Главная
      </Applink>
      <Applink theme={AppLinkTheme.SECONDARY} to="/about">
        О сайте
      </Applink>
    </div>
  );
};
