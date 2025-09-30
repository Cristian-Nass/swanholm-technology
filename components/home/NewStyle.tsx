import Image from "next/image";
const NewStyle = () => {
  return (
    <section className="w-full background-gradient">
      <div className="flex max-w-[1280px] w-full h-[500px] mx-auto flex-nowrap">
        <div className="flex-grow text-left p-[10px]">
          <p className="text-3xl font-bold text-yellow-200 italic mt-4 font-serif">
            Be Connected. Be Safe.
          </p>
        </div>
        <div
          className="w-[332px] flex-shrink-0 bg-cover bg-center"
          // style={{backgroundImage: "url('/assets/images/01.webp')"}}
        >
          <Image
            src="/assets/images/02.webp"
            alt="New Style"
            width={332}
            height={332}
          />
        </div>
      </div>
    </section>
  );
};

export default NewStyle;
