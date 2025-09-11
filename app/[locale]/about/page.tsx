import Image from "next/image";
const AboutPage = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-[16px] justify-center max-w-[1200px] mx-auto lg:my-[32px] p-[26px] lg:rounded-[16px] bg-linear-to-r/srgb from-cyan-200 to-slate-100">
      <div className="w-[200px] md:w-[300px] lg:w-[500px] flex items-center justify-center mx-auto">
        <Image
          src="/assets/images/vest-d.webp"
          alt="About"
          width={300}
          height={430}
        />
      </div>
      <article className="flex flex-col lg:gap-[16px] gap-[8px] px-[16px] lg:pt-14 pt-0">
        <p className="text-3xl md:text-2xl lg:text-5xl font-bold text-cyan-900">
          How can we make the profession as a truck driver safer?
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          That question was the ignition for the connected safety vest, that
          initially grew into a project at a major Swedish truck manufacturer.{" "}
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Swanholm Technology was founded in 2020 when the project was taken
          over.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Our mission is to improve people&apos;s safety by offering smart,
          connected safety products for exposed professions as well as for
          people with an active lifestyle.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          The Alert Vest is the first line of products from Swanholm Technology
          launched in 2022.
        </p>
      </article>
    </section>
  );
};

export default AboutPage;
