import { PRODUCTS_URL } from '@/constants';

export const getProducts = async () => {
  const fecthData = await fetch(PRODUCTS_URL);

  if (!fecthData.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await fecthData.json();
  return data;
};
