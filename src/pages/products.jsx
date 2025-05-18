import ProductsList from "../components/products_list";

const Products = ({ addItem }) => {
  return (
    <ProductsList
      title={"Productos"}
      addItem={addItem}
    />
  );
};

export default Products;