const Products = ({ items, addItems }) => {
  return (
    <>
      <div className="min-h-screen bg-base-300 py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {items.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-50 w-45 m-4"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
