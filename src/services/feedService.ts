import feedData from "@/data/feedData";
import { FeedItem } from "@/types";

const simulateError = false;

export const getFeed = async (): Promise<FeedItem[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error("Network request failed"));
      } else {
        resolve(feedData);
      }
    }, 500);
  });
};
