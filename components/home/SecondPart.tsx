import {useTranslations} from "next-intl";

const SecondPart = () => {
  const t = useTranslations("home");
  return (
    <aside className="flex flex-col gap-[16px] bg-cyan-700 px-4 py-8 rounded-lg w-full text-white">
      <h1 className="text-3xl font-bold">{t("secondPartTitle")}</h1>
      <p>{t("secondPartDescription")}</p>
      <p className="text-lg">{t("secondPartDescription2")}</p>
    </aside>
  );
};

export default SecondPart;
