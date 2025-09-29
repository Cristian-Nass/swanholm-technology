"use client";

import * as React from "react";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LanguageToggle from "../LanguageToggle";
import {House, Store, Phone, Newspaper} from "lucide-react";
import SettingBar from "./SettingBar";
import ProductsBar from "./ProductsBar";

export function NavigationBar() {
  const t = useTranslations("navbar");
  const backgroundColor = "bg-cyan-950";
  const textColor = "text-gray-400";
  const hoverColor = "hover:bg-cyan-950 hover:text-sky-100";

  return (
    <nav className={`${backgroundColor} content-center mx-auto h-10 w-full`}>
      <NavigationMenu viewport={false} className="mx-auto">
        <NavigationMenuList>
          <Link href="/">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <House size={24} />
                <span className="hidden md:inline-block ml-2 font-normal">
                  {t("home")}
                </span>
              </div>
            </NavigationMenuItem>
          </Link>
          <ProductsBar />
          <Link href="/about">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <Store size={24} />
                <span className="hidden md:inline-block ml-2 font-normal">
                  {t("about")}
                </span>
              </div>
            </NavigationMenuItem>
          </Link>
          <Link href="/news">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <Newspaper size={24} />
                <span className="hidden md:inline-block ml-2 font-normal">
                  {t("news")}
                </span>
              </div>
            </NavigationMenuItem>
          </Link>
          <Link href="/contact">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <Phone size={24} />
                <span className="hidden md:inline-block ml-2 font-normal">
                  {t("contact")}
                </span>
              </div>
            </NavigationMenuItem>
          </Link>

          <SettingBar />
        </NavigationMenuList>
      </NavigationMenu>
      <LanguageToggle />
    </nav>
  );
}
