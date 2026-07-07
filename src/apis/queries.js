import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getAllBlogs,
  createPost,
  deleteBlog,
  updateBlog,
  getBlogById,
  editBlog,
} from "./blogs";

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

//Get a blog by Id
export const useGetBlogById = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: async () => await getBlogById(id),
  });
};

//Edit a blog
export const useEditBlog = (blog) => {
  return useMutation({
    mutationFn: async (blog) => await editBlog(blog.id, blog),
  });
};

//Delete a blog
export const useDeleteBlog = () => {
  return useMutation({
    mutationFn: async (id) => await deleteBlog(id),
  });
};

//Update a blog
export const useUpdateBlog = () => {
  return useMutation({
    mutationFn: async (blog) => await updateBlog(blog),
  });
};
