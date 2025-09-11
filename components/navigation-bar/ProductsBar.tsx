import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {useTranslations} from "next-intl";
import {Shirt} from "lucide-react";
import useProductsStore from "@/store/useProductsStore";
const backgroundColor = "bg-cyan-700";
const textColor = "text-gray-100";
const hoverColor = "hover:bg-slate-200";
const ProductsBar = () => {
  const {products} = useProductsStore();
  const t = useTranslations("navbar");
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${backgroundColor} ${textColor} ${hoverColor} cursor-pointer`}>
        <Shirt size={24} />
        <span className="hidden md:inline-block ml-2">{t("products")}</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
          <li>
            {products.map((product) => (
              <NavigationMenuLink asChild key={product.id}>
                <Link href="#">
                  <div className="font-medium">{product.title}</div>
                  {/* <div className="text-muted-foreground">{product.title}</div> */}
                </Link>
              </NavigationMenuLink>
            ))}
            {/* <NavigationMenuLink asChild>
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
            </NavigationMenuLink> */}
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProductsBar;
