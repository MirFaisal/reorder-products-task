import { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { productsContext } from "../../../context/ProductsContext";
import CardHeader from "../cardHeader/CardHeader";
import ProductItem from "../productItem/ProductItem";

const ProductsCard = () => {
  // Use useContext to access 'products' and 'selectedProducts' from the 'productsContext'.
  const { products, selectedProducts } = useContext(productsContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  /**
   * Handles the completion of a drag-and-drop operation, ensuring the reordering of items within a list.
   * This function is called when a drag-and-drop operation is completed.
   *
   * @param {Object} result - The result object containing valuable information about the drag-and-drop event
   *
   * 1. Checks if the item was dropped outside the list and returns early if so.
   * 2. Makes a duplicate of the 'items' array to protect the original data from direct changes.
   * 3. Removes the dragged item from its initial position in the array.
   * 4. Inserts the dragged item at its new position in the array.
   * 5. Updates the component's state with the new item order.
   */

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = [...items];
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);
    setItems(reorderedItems);
  };

  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-7 py-5 heading border-b border-gray-300">
        {selectedProducts.length == 0 ? (
          <p className="text-start font-semibold text-lg">Gallery</p>
        ) : (
          <CardHeader />
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="product-list" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="products-card  p-7 grid grid-cols-5 justify-items-stretch gap-4 overflow-hidden"
            >
              {items.map((product, index) => (
                <Draggable
                  key={product.id}
                  draggableId={product.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        position: snapshot.isDragging ? "fixe" : "relative",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <ProductItem
                        key={product.id}
                        img={product.img}
                        id={product.id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="w-[218px] aspect-square border border-dashed rounded-lg"></div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProductsCard;
