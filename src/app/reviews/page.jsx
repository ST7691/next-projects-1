"use client";
import ReviewsCard from "@/Components/Cards/ReviewsCard";
import Title from "@/Components/Title";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const Reviwes = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())

      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div>
      <Title>
        {" "}
        Food Reviews Total{" "}
        <span className="text-yellow-500"> {reviews.length}</span> Found
      </Title>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {Array.isArray(reviews) &&
          reviews.map((rev) => (
            <ReviewsCard key={rev.id} review={rev}></ReviewsCard>
          ))}
      </div>
    </div>
  );
};

export default Reviwes;
