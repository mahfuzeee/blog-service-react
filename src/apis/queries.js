import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllBlogs } from "./blogs";

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
};
