import {
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleIcon, LogIn, Settings, CircleCheckIcon } from "lucide-react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";
const SettingBar = () => {
  const backgroundColor = "bg-red-400";
  const textColor = "text-gray-100";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${backgroundColor} ${textColor} hover:bg-red-200 cursor-pointer`}
      >
        <Settings size={24} />
        <span className='hidden md:inline-block ml-2'>Inställningar</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='grid w-[200px] gap-4'>
          <li>
            <NavigationMenuLink asChild>
              <Link href='/login' className='flex-row items-center gap-2'>
                <LogIn />
                Logga in
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='/signup' className='flex-row items-center gap-2'>
                <CircleIcon />
                Registrera
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='/profile' className='flex-row items-center gap-2'>
                <CircleCheckIcon />
                Min profil
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default SettingBar;
