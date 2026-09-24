import client from "./client";

export const getAllBlogs = async () => {
  try {
    const res = await client.get("/blogs");
    return res.data.data;
  } catch (error) {
    console.error(
      "error occurred while fetching the data from the server",
      error,
    );
    throw error;
  }
};

//Create a new post
export const createBlog = async (blog) => {
  try {
    const res = await client.post("/blogs", blog);
    return res.data;
  } catch (error) {
    console.error("error occurred while creating the blog", error);
    throw error;
  }
};

//Get a blog by Id
export const getBlogById = async (id) => {
  try {
    const res = await client.get(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    console.error(
      "error occurred while fetching the data from the server",
      error,
    );
    throw error;
  }
};

//Edit a blog post
export const editBlog = async (id, blog) => {
  try {
    const res = await client.put(`/blogs/${id}`, blog);
    return res.data;
  } catch (error) {
    console.error("error occurred while updating the blog", error);
    throw error;
  }
};

//Delete a blog
export const deleteBlog = async (id) => {
  try {
    const res = await client.delete(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    console.error("error occurred while deleting the blog", error);
    throw error;
  }
};
