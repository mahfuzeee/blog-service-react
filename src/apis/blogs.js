export const getAllBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/blogs");
    return res.json();
  } catch (error) {
    console.log("error occured while fetching the data from the server", error);
  }
};
