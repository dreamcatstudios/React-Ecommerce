import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import { useEffect } from "react";
import { FaTruck, FaUndo, FaClock, FaShieldAlt } from "react-icons/fa"; // Importing icons from react-icons
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarComponents from "../components/StarComponents";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    category,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    console.log(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Header />
      <header>
        <nav>
          <h1 className="text-2xl">{`Home/${name}`}</h1>
        </nav>
      </header>
      <section className="m-10">
        <div className="flex gap-5 flex-col sm:flex-row">
          {image ? (
            <div>
              <img src={image[0].url} alt="" />
            </div>
          ) : (
            <div>Loading...</div>
          )}

          <div className="flex flex-col gap-3">
            <div className="gap-3">
              <h1 className="text-3xl">{name}</h1>
              <StarComponents stars={stars} reviews={reviews} />
              <p>Deal of the day</p>
              <p>{description}</p>
            </div>
            {/* PUT FOR ICON HERE */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-center items-center text-center">
                <FaTruck /> Free Delivery
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <FaUndo /> 30 Days Replacement
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <FaClock /> Timely Delivered
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <FaShieldAlt /> 2 Year Warranty
              </div>
            </div>
            <div className="border"></div>
            <div className="flex flex-col items-start">
              <h1>{`Availability: ${stock} item left`}</h1>
              <h1>{`ID: ${id}`}</h1>
              <h1>{`Brand: ${company}`}</h1>
            </div>
            <div className="border"></div>
            <div className="flex flex-row">
              <h1>Color:</h1>
            </div>
            <div>
              <button className="px-5 py-2 text-white bg-purple-500">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleProduct;
