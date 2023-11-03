import PropTypes from "prop-types";
import { useContext } from "react";
import { productsContext } from "../../../context/ProductsContext";

const ProductItem = ({ product }) => {
  // Use the useContext hook to access the 'selectedProducts' state and 'handelSelectedProducts' from the 'productsContext'.

  const { selectedProducts, handelSelectedProducts } =
    useContext(productsContext);

  return (
    <div className="group relative bg-white border border-gray-300 rounded-lg overflow-hidden cursor-pointer first:col-span-2 first:row-span-2">
      <img
        draggable={false}
        className="w-full"
        src={product.img}
        alt={product.name}
      />
      <div
        className={`${
          selectedProducts.includes(product.id)
            ? "opacity-100 overlay absolute w-full h-full bg-black/30 top-0 left-0"
            : "opacity-0 overlay absolute w-full h-full bg-black/30 top-0 left-0 duration-200 ease-linear group-hover:opacity-100"
        } ' }`}
      >
        <input
          className="m-3 w-6 aspect-square cursor-pointer"
          type="checkbox"
          onChange={() => handelSelectedProducts(product.id)}
        />
      </div>
    </div>
  );
};

/**
 *
 *  Assuming required prop.
 * 'product' is a required object prop
 */
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
