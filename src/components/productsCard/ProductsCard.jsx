import { useContext } from "react";
import { productsContext } from "../../../context/ProductsContext";
import CardHeader from "../cardHeader/CardHeader";
import ProductItem from "../productItem/ProductItem";

const ProductsCard = () => {
  // Use useContext to access products and selectedProducts from the context
  const { products, selectedProducts } = useContext(productsContext);

  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-7 py-5 heading border-b border-gray-300">
        {selectedProducts.length == 0 ? (
          <p className="text-start font-semibold text-lg">Gallery</p>
        ) : (
          <CardHeader />
        )}
      </div>
      <div className="p-7 products-card grid grid-cols-5 justify-items-stretch gap-3">
        {products.map((product) => (
          <ProductItem key={product.id} img={product.img} id={product.id} />
        ))}
        <div className="border border-dashed rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductsCard;
