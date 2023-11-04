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

  /**
   * Implementation of a drag-and-drop sorting feature using the UIKit framework.
   *
   * The UIKit framework provides an intuitive and user-friendly way to create
   * interactive web components. In this implementation, we leverage two distinct
   * UIKit attributes to achieve the desired functionality:
   *
   * 1. 'data-uk-sortable': This attribute is used to make elements sortable by
   *    enabling drag-and-drop functionality. It simplifies the process of
   *    reordering items, making it highly user-friendly.
   *
   * 2. 'data-uk-grid': This attribute creates a grid layout that can enhance the
   *    overall presentation of your content. When used in combination with
   *    'data-uk-sortable,' it allows for precise and visually pleasing sorting.
   *
   * By employing these UIKit attributes, we enable the user to seamlessly
   * rearrange items with minimal effort, enhancing the overall user experience.
   */
  return (
    <div className="border bg-white border-gray-300 rounded-xl">
      <div className="px-7 py-5 heading border-b border-gray-300">
        {selectedProducts.length == 0 ? (
          <p className="text-start font-semibold text-3xl">Gallery</p>
        ) : (
          <CardHeader />
        )}
      </div>

      {items && (
        <div
          className="products-card p-7 grid grid-cols-2 justify-items-stretch md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 uk-margin-remove"
          data-uk-sortable="handle: .uk-card"
          data-uk-grid="true"
        >
          {items.map((product) => {
            return (
              <div
                key={product.id}
                className="uk-card uk-margin-remove uk-padding-remove"
              >
                <ProductItem product={product} />
              </div>
            );
          })}
          <div className="aspect-square flex flex-col items-center justify-center bg-white border-2 border-dashed rounded-lg uk-card uk-margin-remove uk-padding-remove">
            <PhotoIcon className="h-6 w-6 text-blue-500" />
            <p className="text-gray-700 font-semibold">Add Image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
