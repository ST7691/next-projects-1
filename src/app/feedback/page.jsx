import FeedbackCard from "@/Components/Cards/FeedbackCard";
import Title from "@/Components/Title";
import { Faculty_Glyphic } from "next/font/google";
import Link from "next/link";
import React from "react";
// meta data
export const metadata = {
  title: "feedback",
};
// feedback get
const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
};
const FeedbackPage = async () => {
  const feedbacks = await getFeedback();
  console.log(feedbacks);
  return (
    <div>
      <Title>FeedBacks .....{feedbacks.length} found</Title>
      <div className="">
        {" "}
        <Link className="btn-btn m-5 " href={"/feedback/add"}>
          Add Feedback
        </Link>
      </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid  gap-4">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback._id}
            feedback={feedback}
            // onDelete={handleDelete}
            // onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
