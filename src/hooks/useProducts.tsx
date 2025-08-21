import { PRODUCTS_URL } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const getProducts = async () => {
  const fecthData = await fetch(PRODUCTS_URL);
  const data = await fecthData.json();
  console.log(data);

  return data;
};

const useProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { data, error, isLoading };
};
export default useProducts;
