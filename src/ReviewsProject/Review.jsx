import React from "react";
import SingleReview from "./SingleReview";
document.title = "Reviews";
const Review = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6  shadow-lg w-120 rounded-md">
        <SingleReview />
      </div>
    </main>
  );
};

export default Review;
