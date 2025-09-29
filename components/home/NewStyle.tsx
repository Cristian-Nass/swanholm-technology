import Image from "next/image";
const NewStyle = () => {
  return (
    <section className="w-full background-gradient">
      <div className="flex max-w-[1280px] w-full h-[400px] mx-auto flex-nowrap background-gradient">
        <div className="flex-grow text-left p-[10px]">
          <p>Text</p>
        </div>
        <div
          className="w-[266px] flex-shrink-0 bg-cover bg-center"
          style={{backgroundImage: "url('/assets/images/01.webp')"}}>
          <Image
            src="/assets/images/01.webp"
            alt="New Style"
            width={266}
            height={266}
          />
        </div>
      </div>
    </section>
  );
};

export default NewStyle;
