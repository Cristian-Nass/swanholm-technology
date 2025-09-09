'use client';

import * as React from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import LanguageToggle from '../LanguageToggle';
import {House, ShoppingCart, Store} from 'lucide-react';
import SettingBar from './SettingBar';
const components: {title: string; href: string; description: string}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export function NavigationBar() {
  const t = useTranslations('navbar');
  const backgroundColor = 'bg-cyan-700';
  const textColor = 'text-gray-100';
  const hoverColor = 'hover:bg-slate-200';

  return (
    <nav className={`${backgroundColor} content-center mx-auto h-10`}>
      <NavigationMenu viewport={false} className="mx-auto">
        <NavigationMenuList>
          <Link href="/">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <House size={24} />
                <span className="hidden md:inline-block ml-2">{t('home')}</span>
              </div>
            </NavigationMenuItem>
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
              <ShoppingCart size={24} />
              <span className="hidden md:inline-block ml-2">Products</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[326px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link href="/about">
            <NavigationMenuItem>
              <div
                className={`${navigationMenuTriggerStyle()} ${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
                <Store size={24} />
                <span className="hidden md:inline-block ml-2">About us</span>
              </div>
            </NavigationMenuItem>
          </Link>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[300px] gap-4'>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href='#'>
                      <div className='font-medium'>Components</div>
                      <div className='text-muted-foreground'>
                        Browse all components in the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='#'>
                      <div className='font-medium'>Documentation</div>
                      <div className='text-muted-foreground'>
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='#'>
                      <div className='font-medium'>Blog</div>
                      <div className='text-muted-foreground'>
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[200px] gap-4'>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href='#'>Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='#'>Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='#'>Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <SettingBar />
        </NavigationMenuList>
      </NavigationMenu>
      <LanguageToggle />
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {href: string}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
