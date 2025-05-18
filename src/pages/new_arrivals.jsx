import ProductsList from "../components/products_list";

const NewArrivals = ({ addItem }) => {
  return (
    <ProductsList
      title={"Novedades"}
      category="jewelery"
      addItem={addItem}
    />
  );
};

export default NewArrivals;