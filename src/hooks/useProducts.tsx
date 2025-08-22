import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productsService";
import { Product } from "@/types";

const useProducts = () => {
  const { data, error, isLoading, refetch } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, error, isLoading, refetch };
};
export default useProducts;
