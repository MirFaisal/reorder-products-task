import PropTypes from "prop-types";
import { createContext, useLayoutEffect, useMemo, useState } from "react";

export const productsContext = createContext();

const ProductsContext = ({ children }) => {
  // State for products and selected products
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  /**
   *
   * Set the initial products when the component render.
   * using useMemo to optimize render performance.
   *
   */
  const data = useMemo(() => {
    return [
      {
        id: 1,
        img: "./products_images/image-1.webp",
      },
      {
        id: 2,
        img: "./products_images/image-2.webp",
      },
      {
        id: 3,
        img: "./products_images/image-3.webp",
      },
      {
        id: 4,
        img: "./products_images/image-4.webp",
      },
      {
        id: 5,
        img: "./products_images/image-5.webp",
      },
      {
        id: 6,
        img: "./products_images/image-6.webp",
      },
      {
        id: 7,
        img: "./products_images/image-7.webp",
      },
      {
        id: 8,
        img: "./products_images/image-8.webp",
      },
      {
        id: 9,
        img: "./products_images/image-9.webp",
      },
      {
        id: 10,
        img: "./products_images/image-10.jpeg",
      },
      {
        id: 11,
        img: "./products_images/image-11.jpeg",
      },
    ];
  }, []);

  /**
   *
   * Use useLayoutEffect to set the initial products when the component renders.
   * ensuring it runs after the initial render to avoid unnecessary re-renders.
   *
   */
  useLayoutEffect(() => {
    setProducts([...data]);
  }, [data]);

  /**
   * handel selected Products ID
   *
   * @param {number} productId The ID of the selected product.
   *
   * Check if the selected product ID already exists in the selectedProducts array.
   * If the product is already selected, remove its ID from the selectedProducts array.
   * If the product is not selected, add its ID to the selectedProducts array.
   *
   */

  const handelSelectedProducts = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else setSelectedProducts([...selectedProducts, productId]);
  };

  /**
   *
   * Handle the deletion of selected products.
   * Filter the products array to exclude the selected products' IDs.
   * Clear the selectedProducts array to deselect the products.
   * Update the products array with the filtered products.
   *
   */
  const handleDeleteSelected = () => {
    const updatedProducts = products.filter(
      (product) => !selectedProducts.includes(product.id)
    );

    setSelectedProducts([]);

    setProducts([...updatedProducts]);
  };

  return (
    <productsContext.Provider
      value={{
        products,
        selectedProducts,
        handelSelectedProducts,
        handleDeleteSelected,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

// Assuming 'children' should be required DOM node list
ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
