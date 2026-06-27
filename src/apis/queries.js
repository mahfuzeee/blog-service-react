import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllBlogs, createPost } from "./blogs";

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
};

//Create a new post
export const useCreatePost = () => {
  return useMutation({
    mutationFn: async (blog) => await createPost(blog),
  });
};
