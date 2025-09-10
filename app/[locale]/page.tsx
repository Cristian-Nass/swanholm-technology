import {useTranslations} from 'next-intl';
import Footer from '@/components/Footer';
import SecondPart from '@/components/home/SecondPart';
import FirstPart from '@/components/home/FirstPart';
export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <FirstPart />
          <SecondPart />
        </main>
        <Footer />
      </div>
    </>
  );
}
