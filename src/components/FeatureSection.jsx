import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../helpers/FormatPrice";

const FeatureSection = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="bg-gray-400 p-10 ">
      <div className="flex flex-col mt-5">
        <h1>CHECK NOW!</h1>
        <h1 className="text-3xl font-bold">Our Feature Services!</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-5 ">
        {/* Card Code */}
        {featureProducts.map((item) => {
          return (
            <>
              <div
                key={item.key}
                className="items-center w-full sm:w-[33%] bg-white rounded-sm p-3 hover:drop-shadow-md hover:scale-105 transition-all"
              >
                <Link to={`/product/${item.id}`}>
                  <div className="relative">
                    <div className="absolute px-5 py-1 rounded-md bg-white top-2 right-2">
                      {item.category}
                    </div>
                    <img
                      className="rounded-sm brightness-70"
                      src={item.image}
                      alt={item.category}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <h1>{item.name}</h1>
                    <h1>{<FormatPrice currency={item.price} />}</h1>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
        {/* Card Code End Here */}
      </div>
    </section>
  );
};

export default FeatureSection;
