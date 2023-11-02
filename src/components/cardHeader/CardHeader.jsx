import { useContext } from "react";
import { productsContext } from "../../../context/ProductsContext";

const CardHeader = () => {
  const { selectedProducts, handleDeleteSelected } =
    useContext(productsContext);
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="flex items-center text-start font-semibold text-lg">
          <input
            className="w-6 aspect-square mr-2"
            type="checkbox"
            defaultChecked={true}
          />
          {selectedProducts.length} File Selected
        </p>

        <button
          className="p-0 m-0 text-red-600 text-lg font-semibold duration-100 hover:underline cursor-pointer"
          onClick={() => handleDeleteSelected()}
        >
          Delete File
        </button>
      </div>
    </>
  );
};

export default CardHeader;
