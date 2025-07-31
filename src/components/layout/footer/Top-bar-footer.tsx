import { Link } from 'react-router-dom';
import { TextNormal } from '../../common/text/Text-normal';
import { useTranslation } from 'react-i18next';
export function TopBarFooter() {
  const { t } = useTranslation();

  return (
    <div className="bg-primary">
      <div className="bg-[url('/bg-7.png')]">
        <div className="container mx-auto p-5 flex items-center justify-between gap-7">
          <div>
            <h4 className="uppercase text-lg mb-4">
              We are ready to build your dream tell us more about your project
            </h4>
            <TextNormal>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse viverra mauris eget tortor.
            </TextNormal>
          </div>
          <div className="min-w-fit">
            <nav>
              <Link
                to="/contact-us"
                className="uppercase font-bold px-4 py-3 bg-secondary hover:brightness-90 rounded-md text-white"
              >
                {t('contact_us')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
