import PropTypes from "prop-types";
import { createContext } from "react";

export const productsContext = createContext();

const ProductsContext = ({ children }) => {
  const data = [
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

  return (
    <productsContext.Provider value={{ data }}>
      {children}
    </productsContext.Provider>
  );
};

// Assuming 'children' should be a required DOM
 node list
ProductsContext.propTypes = {
  children: PropTypes.node,
};

export default ProductsContext;
