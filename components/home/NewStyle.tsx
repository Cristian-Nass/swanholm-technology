import Image from "next/image";
const NewStyle = () => {
  return (
    <div className="h-[400px] bg-blue-900 flex w-7xl">
      <div className="flex-1 w-full">Some text goes here</div>
      <div className="flex-none">
        <Image
          src="/assets/images/01.webp"
          alt="New Style"
          width={266}
          height={266}
        />
      </div>
    </div>
  );
};

export default NewStyle;
