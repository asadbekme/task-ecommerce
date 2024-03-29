import { useEffect, useState } from "react";
import { Helmet, CommonSection, ProductList, Loader } from "../components";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.scss";
// import products from "../utils/products";
import useGetData from "../hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState([]);

  console.log(products);

  useEffect(() => {
    if (!loading) {
      setProductsData(products);
    }
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "barcha") {
      setProductsData(products);
    }

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (product) => product.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "kreslo") {
      const filteredProducts = products.filter(
        (product) => product.category === "kreslo"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (product) => product.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "bedroom") {
      const filteredProducts = products.filter(
        (product) => product.category === "bedroom"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "other") {
      const filteredProducts = products.filter(
        (product) => product.category === "other"
      );
      setProductsData(filteredProducts);
    }
  };

  // const handlePriceFilter = (e) => {
  //   const priceFilterValue = e.target.value;
  //   if (priceFilterValue === "ascending") {
  //     const filteredProducts = products.sort((a, b) => a.price - b.price);
  //     setProductsData(filteredProducts);
  //   }

  //   if (priceFilterValue === "descending") {
  //     const filteredProducts = products.sort((a, b) => b.price - a.price);
  //     setProductsData(filteredProducts);
  //   }
  // };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title={"Mahsulotlar"} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="shop">
            <Container>
              <Row>
                <Col lg="3" md="6">
                  <div className="shop__filter--widget">
                    <select onChange={handleFilter}>
                      <option>Kategoriya bo'yicha filtrlash</option>
                      <option value="barcha">Barchasi</option>
                      <option value="sofa">Divan</option>
                      <option value="chair">Stul</option>
                      <option value="kreslo">Kreslo</option>
                      <option value="bedroom">Krovat</option>
                      <option value="other">Boshqa</option>
                    </select>
                  </div>
                </Col>
                <Col lg="3" md="6" className="text-end">
                  <div className="shop__filter--widget">
                    <select>
                      <option>Saralash turi</option>
                      <option value="ascending">O'suvchi</option>
                      <option value="descending">Kamayuvchi</option>
                    </select>
                  </div>
                </Col>
                <Col lg="6" md="12">
                  <div className="shop__search">
                    <input
                      type="text"
                      className="shop__search--input"
                      placeholder="Qidirish..."
                      onChange={handleSearch}
                    />
                    <span>
                      <i className="ri-search-line"></i>
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="products pt-0">
            <Container>
              <Row>
                {productsData.length === 0 ? (
                  <h1 className="text-center fs-4">No products are found.</h1>
                ) : (
                  <ProductList data={productsData} />
                )}
              </Row>
            </Container>
          </section>
        </>
      )}
    </Helmet>
  );
};

export default Shop;
