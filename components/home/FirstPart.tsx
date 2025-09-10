import VestTDImage from "../VestTDImage";
import {useTranslations} from "next-intl";

const FirstPart = () => {
  const t = useTranslations("home");
  return (
    <div className="flex flex-col lg:flex-row gap-[16px] h-full items-center w-full justify-evenly">
      <div>
        <VestTDImage />
      </div>
      <div className="flex flex-col gap-[16px]">
        <h1 className="sm:text-5xl text-3xl font-bold">{t("title")}</h1>
        <h3 className="sm:text-3xl text-xl font-bold text-cyan-700">
          {t("subtitle")}
        </h3>
        <p className="sm:text-lg text-base">{t("description")}</p>
        <p className="sm:text-lg text-base">{t("description2")}</p>
      </div>
    </div>
  );
};

export default FirstPart;
