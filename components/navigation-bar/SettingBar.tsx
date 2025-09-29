import {
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {CircleIcon, LogIn, Settings, CircleCheckIcon} from "lucide-react";
import {NavigationMenuItem} from "@/components/ui/navigation-menu";
import {NavigationMenuContent} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {useTranslations} from "next-intl";
const SettingBar = () => {
  const backgroundColor = "bg-cyan-950";
  const textColor = "text-gray-400";
  const hoverColor = "hover:bg-cyan-950 hover:text-sky-100";
  const t = useTranslations("navbar");
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
        <Settings size={24} />
        <span className="hidden md:inline-block ml-2 font-normal">
          {t("settings")}
        </span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="/login" className="flex-row items-center gap-2">
                <LogIn />
                Login
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/signup" className="flex-row items-center gap-2">
                <CircleIcon />
                Register
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/profile" className="flex-row items-center gap-2">
                <CircleCheckIcon />
                My profile
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default SettingBar;
