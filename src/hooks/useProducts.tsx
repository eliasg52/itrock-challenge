import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/productsService';

const useProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { data, error, isLoading };
};
export default useProducts;
