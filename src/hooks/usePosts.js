import { useInfiniteQuery } from "@tanstack/react-query";
import * as api from "../utils/api";

export const usePostsFeed = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => api.fetchPosts({ pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
};

export const usePostReplies = (postId) => {
  return useInfiniteQuery({
    queryKey: ["postReplies", postId],
    queryFn: ({ pageParam = 1 }) => api.fetchPostReplies({ postId, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
};

export const useUserPosts = (handler) => {
  return useInfiniteQuery({
    queryKey: ["userPosts", handler],
    queryFn: ({ pageParam = 1 }) => api.fetchUserPosts({ handler, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
};
