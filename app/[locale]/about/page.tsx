import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex gap-[16px] justify-center max-w-[1200px] mx-auto bg-cyan-100 my-[32px] p-[26px] rounded-[16px]">
      <div className="w-[300px]">
        <Image
          src="/assets/images/vest-d.webp"
          alt="About"
          width={300}
          height={430}
        />
      </div>
      <article className="flex flex-col gap-[16px] p-[16px]">
        <p className="text-3xl font-bold text-cyan-900">
          How can we make the profession as a truck driver safer?
        </p>
        <p className="text-lg">
          That question was the ignition for the connected safety vest, that
          initially grew into a project at a major Swedish truck manufacturer.{" "}
        </p>
        <p className="text-lg">
          Swanholm Technology was founded in 2020 when the project was taken
          over.
        </p>
        <p className="text-lg">
          Our mission is to improve people&apos;s safety by offering smart,
          connected safety products for exposed professions as well as for
          people with an active lifestyle.
        </p>
        <p className="text-lg">
          The Alert Vest is the first line of products from Swanholm Technology
          launched in 2022.
        </p>
      </article>
    </div>
  );
};

export default AboutPage;
