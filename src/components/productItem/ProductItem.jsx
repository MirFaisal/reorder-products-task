import PropTypes from "prop-types";

const ProductItem = ({ img }) => {
  return (
    <div className="group relative bg-red-500 border border-gray-300 rounded-lg overflow-hidden">
      <img className="w-full" src={img} alt={img} />
      <div className="overlay absolute w-full h-full bg-black/30 top-0 left-0 opacity-0 group-hover:opacity-100">
        <input
          className=""
          type="checkbox"
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
    </div>
  );
};

// Assuming 'img' should be a required string prop
ProductItem.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ProductItem;
