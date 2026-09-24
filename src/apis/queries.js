import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getAllBlogs,
  createPost,
  deleteBlog,
  getBlogById,
  editBlog,
} from "./blogs";

import { createComment, getComments } from "./comments";

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
export const useEditBlog = () => {
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

//Create a comment
export const useCreateComment = () => {
  return useMutation({
    mutationFn: async (comment) => await createComment(comment),
  });
};

//Get comments
export const useGetComments = (id) => {
  return useQuery({
    queryKey: ["comments", id],
    queryFn: async () => await getComments(id),
  });
};
