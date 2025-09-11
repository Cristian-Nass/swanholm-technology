import SecondPart from "@/components/home/SecondPart";
import FirstPart from "@/components/home/FirstPart";
export default function Home() {
  return (
    <section className="font-sans grid justify-items-center px-4 sm:px-8">
      <article className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FirstPart />
        <SecondPart />
        <SecondPart />
        <SecondPart />
        <SecondPart />
        <SecondPart />
      </article>
    </section>
  );
}
