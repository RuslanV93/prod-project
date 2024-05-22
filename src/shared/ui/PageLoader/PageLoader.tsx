import { classNames } from 'shared/lib/classNames';
import style from './PageLoader.module.scss';
import { useTranslation } from 'react-i18next';
import Loader from '../Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
