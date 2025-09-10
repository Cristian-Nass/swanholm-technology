import VestTDImage from '../VestTDImage';
import {useTranslations} from 'next-intl';

const FirstPart = () => {
  const t = useTranslations('home');
  return (
    <div className="flex flex-col lg:flex-row gap-[16px] h-full items-center w-full justify-evenly">
      <div>
        <VestTDImage />
      </div>
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <h3 className="text-2xl font-bold">{t('subtitle')}</h3>
        <p>{t('description')}</p>
        <p>{t('description2')}</p>
      </div>
    </div>
  );
};

export default FirstPart;
