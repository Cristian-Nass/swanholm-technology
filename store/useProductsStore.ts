import {create} from "zustand";
import {ProductType, initialProducts} from "@/data/products";

interface ProductsStore {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: initialProducts,
  setProducts: (products) => set({products}),
}));

export default useProductsStore;
