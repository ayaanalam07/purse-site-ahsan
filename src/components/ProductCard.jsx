import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);

    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
      style: {
        borderRadius: "8px",
        background: "#2c2218",
        color: "#F6F3ED",
        fontWeight: "bold",
      },
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="
        block bg-warm-ivory rounded-xl overflow-hidden
        shadow-sm hover:shadow-md transition
      "
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="
          w-full h-36 sm:h-44 md:h-52
          object-cover
        "
      />

      {/* Content */}
      <div className="p-3 text-center">
        <h3 className="text-sm sm:text-base font-semibold text-deep-mocha truncate">
          {product.name}
        </h3>

        <p className="text-soft-gold font-bold text-sm sm:text-lg mt-1">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="
            mt-2 w-full py-1.5
            text-xs sm:text-sm
            bg-deep-mocha text-white rounded-lg
            hover:bg-soft-gold hover:text-deep-mocha
            transition
          "
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
