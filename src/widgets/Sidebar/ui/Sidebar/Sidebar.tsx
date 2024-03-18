import { classNames } from 'shared/lib/classNames';
import style from './Sidebar.module.scss';
import { useState } from 'react';
import ThemeSwitcher from 'shared/ui/themeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};
