import { useGetBlogById } from "../apis/queries";

function GetPostById({ id }) {
  const { data, isLoading, isError } = useGetBlogById(id);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="flex flex-col items-center p-2 mt-4 gap-3">
      <h1 className="text-lg font-bold ">{data["title"]}</h1>
      <p className="p-2a">{data["body"]}</p>
      <p>Author: {data["author"]}</p>
    </div>
  );
}

export default GetPostById;
