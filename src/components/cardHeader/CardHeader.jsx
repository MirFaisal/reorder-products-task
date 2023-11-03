import { useContext } from "react";
import { productsContext } from "../../../context/ProductsContext";

const CardHeader = () => {
  // useContext hook to access 'selectedProducts' and 'handleDeleteSelected' from 'productsContext'.
  const { selectedProducts, handleDeleteSelected } =
    useContext(productsContext);
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="flex items-center text-start font-semibold text-3xl">
          <input
            className="w-6 aspect-square mr-2"
            type="checkbox"
            defaultChecked={true}
          />
          {selectedProducts.length} File Selected
        </p>
        <button
          className="p-0 m-0 text-red-600 text-xl font-semibold duration-100 hover:underline cursor-pointer"
          onClick={() => handleDeleteSelected()}
        >
          Delete File
        </button>
      </div>
    </>
  );
};

export default CardHeader;
