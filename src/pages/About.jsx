const About = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl bg-base-100 p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-base-content leading-relaxed">
          Welcome to
          <span className="font-semibold text-secondary">YourStore</span>! We
          are passionate about delivering the best products to your doorstep
          quickly and securely. Whether you're shopping for the latest gadgets,
          trendy fashion, or everyday essentials, we've got you covered with
          handpicked items and unbeatable deals.
        </p>
        <p className="mt-4 text-base-content">
          Our mission is to provide a seamless online shopping experience with
          fast delivery, secure payments, and top-notch customer service. We are
          constantly evolving to bring you the latest and greatest from trusted
          brands worldwide.
        </p>
        <p className="mt-4 text-base-content italic">Happy Shopping! 🛍️</p>
      </div>
    </div>
  );
};

export default About;
