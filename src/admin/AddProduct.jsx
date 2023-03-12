import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { db, storage } from "../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProductHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // * add product to the firebase database
    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + productImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, productImg);
      uploadTask.on(
        () => {
          toast.error("images not uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: title,
              shortDesc: shortDesc,
              description: description,
              category: category,
              price: price,
              imgUrl: downloadURL,
            });
          });
          setLoading(false);
          toast.success("Product successfully added!");
          navigate("/dashboard/all-products");
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error("Product not added!");
    }
  };

  return (
    <section className="add__product">
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <Loader />
            ) : (
              <>
                <h4 className="add__product--title fw-bold mb-4 text-center">
                  Add Product
                </h4>
                <Form onSubmit={addProductHandler}>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input
                      type="text"
                      placeholder="Product Name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Lorem..."
                      value={shortDesc}
                      onChange={(e) => setShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <textarea
                      rows="5"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="$100"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2 rounded-1"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option>Select category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group">
                      <span>Product Image</span>
                      <input
                        type="file"
                        onChange={(e) => setProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>

                  <button type="submit" className="add__product--btn btn__buy">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
