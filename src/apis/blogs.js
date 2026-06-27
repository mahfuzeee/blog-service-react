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
