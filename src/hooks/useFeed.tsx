import { useQuery } from "@tanstack/react-query";
import { getFeed } from "@/services/feedService";
import { FeedItem } from "@/types";

const useFeed = () => {
  const { data, error, isLoading, refetch } = useQuery<FeedItem[]>({
    queryKey: ["feed"],
    queryFn: getFeed,
  });

  return { data, error, isLoading, refetch };
};
export default useFeed;
