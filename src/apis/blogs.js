const baseUrl = import.meta.env.VITE_BASE_URL;
export const getAllBlogs = async () => {
  try {
    const res = await fetch(baseUrl);
    return res.json();
  } catch (error) {
    console.log("error occured while fetching the data from the server", error);
  }
};
