import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function LoginUser() {
  const { t } = useTranslation();
  return (
    <nav>
      <Link
        to="/login"
        className="uppercase font-bold hover:text-primary px-2 py-1 bg-black/10 block rounded-md hover:bg-secondary"
      >
        {t('login')}
      </Link>
    </nav>
  );
}
