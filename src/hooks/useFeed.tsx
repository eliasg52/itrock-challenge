import { useQuery } from '@tanstack/react-query';
import feedData from '@/data/feedData';

const simulateError = false;

const getFeed = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error('Network request failed'));
      } else {
        resolve(feedData);
      }
    }, 500);
  });
};

const useFeed = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: getFeed,
  });

  return { data, error, isLoading };
};
export default useFeed;
