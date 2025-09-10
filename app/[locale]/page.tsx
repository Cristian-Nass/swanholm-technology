import {useTranslations} from 'next-intl';
import VestTDImage from '@/components/VestTDImage';
import Footer from '@/components/Footer';
import SecondPart from '@/components/home/SecondPart';
export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex gap-[16px] h-full items-center">
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
          <SecondPart />
        </main>
        <Footer />
      </div>
    </>
  );
}
