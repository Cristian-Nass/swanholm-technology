import SecondPart from "@/components/home/SecondPart";
// import FirstPart from "@/components/home/FirstPart";
import NewStyle from "@/components/home/NewStyle";
export default function Home() {
  return (
    <section>
      <article className="flex flex-col gap-[2px] row-start-2 items-center sm:items-start">
        {/* <FirstPart /> */}
        <NewStyle />
        <SecondPart />
      </article>
    </section>
  );
}
