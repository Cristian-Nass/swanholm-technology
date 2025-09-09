import Link from 'next/link';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

const backgroundColor = 'bg-cyan-700';
const textColor = 'text-gray-100';
const hoverColor = 'hover:bg-slate-200';
const ProductsBar = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
        <span className="hidden md:inline-block ml-2">Products</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Components</div>
                <div className="text-muted-foreground">
                  Browse all components in the library.
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Documentation</div>
                <div className="text-muted-foreground">
                  Learn how to use the library.
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Blog</div>
                <div className="text-muted-foreground">
                  Read our latest blog posts.
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProductsBar;
