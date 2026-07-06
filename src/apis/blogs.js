const baseUrl = import.meta.env.VITE_BASE_URL;
export const getAllBlogs = async () => {
  try {
    const res = await fetch(baseUrl);
    return res.json();
  } catch (error) {
    console.log("error occured while fetching the data from the server", error);
  }
};

//Create a new post
export const createPost = async (blog) => {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    return res.json();
  } catch (error) {
    console.log("error occured while creating the blog", error);
  }
};

//Get a blog by Id
export const getBlogById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/${id}`);
    console.log(res);
    return res.json();
  } catch (error) {
    console.log("error occured while fetching the data from the server", error);
  }
};

//Edit a blog post
export const editBlog = async (id, blog) => {
  try {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    return res.json();
  } catch (error) {
    console.log("error occured while updating the blog", error);
  }
};

//Update a blog
export const updateBlog = async (id, blog) => {
  try {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    return res.json();
  } catch (error) {
    console.log("error occured while updating the blog", error);
  }
};

//Delete a blog
export const deleteBlog = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    console.log("error occured while deleting the blog", error);
  }
};
