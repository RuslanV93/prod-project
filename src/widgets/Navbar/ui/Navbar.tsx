import { classNames } from 'shared/lib/classNames';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/Applink';
import style from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links} />
      <Applink
        theme={activePage === '/' ? AppLinkTheme.RED : AppLinkTheme.SECONDARY}
        to="/"
        className={classNames(style.mainLink, {}, [className])}
        isActive={activePage === '/'}
        onClick={() => handleSetActivePage('/')}
      >
        {t('Main')}
      </Applink>
      <Applink
        theme={activePage === '/about' ? AppLinkTheme.RED : AppLinkTheme.SECONDARY}
        to="/about"
        isActive={activePage === '/about'}
        onClick={() => handleSetActivePage('/about')}
      >
        {t('About')}
      </Applink>
    </div>
  );
};
