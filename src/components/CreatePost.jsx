import { use } from "react";
import { useCreatePost } from "../apis/queries";

const CreatePost = () => {
  const { mutateAsync } = useCreatePost();

  async function handleSubmit(e) {
    e.preventDefault();
    await mutateAsync({
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
    });
    alert("post created successfully");
    e.target.reset();
  }

  return (
    <div className="flex flex-col gap-4 items-center p-4 mt-4">
      <h1 className="text-lg font-bold mt-4 p-2">Create Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-2 bg-gray-300 border rounded p-4"
      >
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <textarea
          name="body"
          placeholder="Body"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <input
          type="text"
          name="author"
          required
          placeholder="Author"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
