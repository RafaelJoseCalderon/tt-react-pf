import ProductsList from "../components/products_list";

const Offers = ({ addItem }) => {
  return (
    <ProductsList
      title={"Ofertas"}
      category="men's clothing"
      addItem={addItem}
    />
  );
};

export default Offers;