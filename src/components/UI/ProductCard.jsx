import { motion } from "framer-motion";
import "../../styles/product-card.scss";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../../slice/cart";
import { FaCartPlus } from "react-icons/fa";

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
    <Col lg="3" md="4" sm="6" className="mb-4">
      <div className="product__card">
        <Link to={`/shop/${product.id}`}>
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={product.imgUrl}
              alt="Product image"
            />
          </div>
        </Link>
        <div className="product__info">
          <Link to={`/shop/${product.id}`}>
            <h4 className="product__name">{product.productName}</h4>
          </Link>
          <span className="product__category">{product.category}</span>
        </div>
        <div className="product__item">
          <span className="product__price">${product.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            className="product__add"
            onClick={addToCart}
          >
            <FaCartPlus />
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
