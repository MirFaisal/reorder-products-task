import { useContext, useEffect, useState } from "react";
import { productsContext } from "../../../context/ProductsContext";
import ProductItem from "../productItem/ProductItem";
import "./Productscard.css";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);

  const { data } = useContext(productsContext);

  useEffect(() => {
    setProducts([...data]);
  }, [data]);

  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-7 py-5 heading border-b border-gray-300">
        <p className="text-start font-semibold text-lg">Gallery</p>
      </div>
      <div className="p-7 products-card grid grid-cols-5 justify-items-stretch gap-3">
        {products.map((product) => (
          <ProductItem key={product.id} img={product.img} />
        ))}
        <div className="border border-dashed rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductsCard;
