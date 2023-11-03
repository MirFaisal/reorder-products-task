import { PhotoIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import "uikit/dist/js/uikit.min.js";
import { productsContext } from "../../../context/ProductsContext";
import CardHeader from "../cardHeader/CardHeader";
import ProductItem from "../productItem/ProductItem";
const ProductsCard = () => {
  // Use useContext to access 'products' and 'selectedProducts' from the 'productsContext'.
  const { products, selectedProducts } = useContext(productsContext);

  // Initialize 'items' state to hold the list of products.
  const [items, setItems] = useState([]);

  // Use useEffect to update 'items' when 'products' change.
  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-7 py-5 heading border-b border-gray-300">
        {selectedProducts.length == 0 ? (
          <p className="text-start font-semibold text-lg">Gallery</p>
        ) : (
          <CardHeader />
        )}
      </div>

      <div
        className="products-card p-7 justify-items-stretch gap-4 overflow-auto uk-margin-remove"
        data-uk-sortable="handle: .uk-card"
        data-uk-grid="true"
      >
        {items.map((product) => {
          return (
            <div
              key={product.id}
              className="uk-card uk-margin-remove uk-padding-remove"
            >
              <ProductItem img={product.img} id={product.id} />
            </div>
          );
        })}
        <div className="aspect-square flex flex-col items-center justify-center border-2 border-dashed rounded-lg uk-card uk-margin-remove uk-padding-remove">
          <PhotoIcon className="h-6 w-6 text-blue-500" />
          <p className="text-gray-700 font-semibold">Add Image</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
