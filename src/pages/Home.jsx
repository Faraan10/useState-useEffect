import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* Hero Image */}
        <img
          src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Shopping"
        />

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Your Favorite Products Delivered Fast
          </h1>
          <p className="py-4 text-base-content">
            Discover the best deals on electronics, fashion, and more. Shop
            online and get your items delivered to your doorstep with ease and
            speed!
          </p>
          <Link to="/products">
            <button className="btn btn-primary btn-lg mt-4">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
