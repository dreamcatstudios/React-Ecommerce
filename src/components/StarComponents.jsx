import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const StarComponents = ({ stars, reviews }) => {
  let fullStars = 0;
  let hasHalfStar = false;

  if (stars) {
    console.log(stars);
    console.log(reviews);
    fullStars = Math.floor(stars); // Get the integer part of the rating
    hasHalfStar = stars % 1 !== 0; // Check if the rating has a half star
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {hasHalfStar && <FaStarHalf />} {/* Render the half star if needed */}
      </div>
      <div>
        <h1>{`(${reviews} total reviews.)`}</h1>
      </div>
    </div>
  );
};

export default StarComponents;
