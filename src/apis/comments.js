import client from "./client";

export const createComment = async (comment) => {
  try {
    const res = await client.post("/comments", comment);
    return res.data;
  } catch (error) {
    console.error("error occurred while creating the comment", error);
    throw error;
  }
};

export const getComments = async (id) => {
  try {
    const res = await client.get(`/comments/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(
      "error occurred while fetching the data from the server",
      error,
    );
    throw error;
  }
};
