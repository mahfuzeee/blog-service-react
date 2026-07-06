import { useEditBlog, useGetBlogById } from "../apis/queries";

const EditBlog = (porps) => {
  const { data, isLoading, isError } = useGetBlogById(porps.id);
  const { mutateAsync } = useEditBlog();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await mutateAsync({
        id: porps.id,
        title: e.target.title.value,
        body: e.target.body.value,
        author: e.target.author.value,
      });
      alert("post edited successfully");
      e.target.reset();
    } catch (error) {
      console.error("error occured while editing the blog", error);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col gap-4 items-center p-4 mt-4">
      <h1 className="text-lg font-bold mt-4 p-2"> Edit Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-2 bg-gray-300 border rounded p-4"
      >
        <input
          type="text"
          defaultValue={data["title"]}
          name="title"
          required
          placeholder="Title"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <textarea
          defaultValue={data["body"]}
          name="body"
          placeholder="Body"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <input
          type="text"
          defaultValue={data["author"]}
          name="author"
          required
          placeholder="Author"
          className="border rounded p-2 mb-2 bg-white text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
