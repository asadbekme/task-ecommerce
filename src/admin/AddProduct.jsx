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

    // const product = {
    //   productName: title,
    //   shortDesc: shortDesc,
    //   description: description,
    //   category: category,
    //   price: price,
    //   imgUrl: productImg,
    // };
    // console.log(product);

    // * add product to the firebase database
    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + productImg.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        () => {
          toast.error("Rasmlar yuklanmagan!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);

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
          toast.success("Mahsulot muvaffaqiyatli qo'shildi!");
          navigate("/dashboard/all-products");
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error("Mahsulot qo'shilmagan!");
    }
  };

  return (
    <section className="add__product">
      <Container>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            <Col lg="12">
              <h4 className="add__product--title fw-bold mb-4 text-center">
                Mahsulot qo'shish
              </h4>
              <Form onSubmit={addProductHandler}>
                <FormGroup className="form__group">
                  <span>Mahsulot nomi</span>
                  <input
                    type="text"
                    placeholder="Mahsulot nomini kiriting"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Qisqacha Tasnif</span>
                  <input
                    type="text"
                    placeholder="Mahsulot qisqacha tasnifini kiriting..."
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Tavsif</span>
                  <textarea
                    rows="5"
                    placeholder="Mahsulot tasnifini kiriting..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </FormGroup>

                <div className="d-flex align-items-center justify-content-between gap-5">
                  <FormGroup className="form__group w-50">
                    <span>Narx</span>
                    <input
                      type="number"
                      placeholder="Mahsulot narxini kiriting($100)"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form__group w-50">
                    <span>Kategoriya</span>
                    <select
                      className="w-100 p-2 rounded-1"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option>Kategoriyani tanlang</option>
                      <option value="stul">Stul</option>
                      <option value="divan">Divan</option>
                      <option value="krovat">Krovat</option>
                      <option value="kreslo">Kreslo</option>
                      <option value="other">Boshqa</option>
                    </select>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup className="form__group">
                    <span>Mahsulot rasmi</span>
                    <input
                      type="file"
                      onChange={(e) => setProductImg(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                </div>

                <button type="submit" className="add__product--btn btn__buy">
                  Mahsulot qo'shish
                </button>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
