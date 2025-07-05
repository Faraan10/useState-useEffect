const Products = ({ items, addItems }) => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {items.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-40"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <div className="card-actions justify-end">
                <p className="text-base">${product.price.toFixed(2)}</p>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addItems(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
