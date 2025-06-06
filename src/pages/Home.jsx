import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Items are just one click away to be at your doorstep
        </h2>
        <button className="btn btn-primary btn-lg">
          <Link to="/products">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
