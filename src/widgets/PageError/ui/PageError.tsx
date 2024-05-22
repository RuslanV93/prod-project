import { classNames } from 'shared/lib/classNames';
import style from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(style.PageError, {}, [className])}>
      {t('PageError')}
      <Button onClick={reloadPage}>{t(t('Refresh'))}</Button>
    </div>
  );
};

export default PageError;
