import { PRODUCTS_URL } from "@/constants";
import { Product } from "@/types";

export const getProducts = async (): Promise<Product[]> => {
  const fetchData = await fetch(PRODUCTS_URL);

  if (!fetchData.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await fetchData.json();
  return data;
};
