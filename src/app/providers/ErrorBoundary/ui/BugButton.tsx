import { classNames } from 'shared/lib/classNames';

import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

//Компонент для тестирования
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={throwError}>{t('Throw error')}</Button>;
};
