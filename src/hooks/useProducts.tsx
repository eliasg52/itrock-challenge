import { PRODUCTS_URL } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const getProducts = async () => {
  const fecthData = await fetch(PRODUCTS_URL);

  if (!fecthData.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await fecthData.json();
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
