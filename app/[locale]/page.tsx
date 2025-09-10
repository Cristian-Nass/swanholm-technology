import Footer from '@/components/Footer';
import SecondPart from '@/components/home/SecondPart';
import FirstPart from '@/components/home/FirstPart';
export default function Home() {
  return (
    <>
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> */}
      <div className="font-sans grid justify-items-center pb-20 px-4 sm:px-8">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <FirstPart />
          <SecondPart />
        </main>
        <Footer />
      </div>
    </>
  );
}
