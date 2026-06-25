import { GetAllBlogs } from "../components/GetAllBlogs";

const Home = () => {
  return (
    <div>
      <p className="text-lg font-bold text-center">
        This is a simple blog page.
      </p>
      <GetAllBlogs />
    </div>
  );
};

export default Home;
