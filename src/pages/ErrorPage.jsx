import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Homepage from "./Homepage";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="flex items-center">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl">404</h1>
            <h1 className="text-2xl">UH OH! You're lost.</h1>
            <p className="text-center">
              The Page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.{" "}
            </p>
          </div>

          <div>
            <Link to="/">
              <button className="px-5 py-3 bg-purple-500">Home</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
