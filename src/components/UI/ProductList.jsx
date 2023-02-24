import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
