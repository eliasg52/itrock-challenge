import { useQuery } from '@tanstack/react-query';
import feedData from '@/data/feedData';

const getFeed = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(feedData);
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
