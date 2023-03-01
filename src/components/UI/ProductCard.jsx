import { motion } from "framer-motion";
import "../../styles/product-card.scss";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../../slice/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addProduct({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      })
    );

    toast.success("Product added successfully.");
  };

  return (
    <Col lg="3" md="4" className="mb-4">
      <Link to={`/shop/${product.id}`}>
        <div className="product__card">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={product.imgUrl}
              alt="Chair"
            />
          </div>
          <div className="product__info">
            <h4 className="product__name">{product.productName}</h4>
            <span className="product__category">{product.category}</span>
          </div>
          <div className="product__item">
            <span className="product__price">${product.price}</span>
            <motion.span
              whileTap={{ scale: 1.2 }}
              className="product__add"
              onClick={addToCart}
            >
              <i className="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProductCard;
