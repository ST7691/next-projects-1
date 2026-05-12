// components/FeedbackForm.jsx
"use client";

import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setLoading(true);

      const feedbackData = {
        message,
        date: new Date(),
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_server}/api/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        },
      );

      const data = await res.json();

      // Success Alert
      if (data?.insertedId) {
        Swal.fire({
          position: "top-right",
          title: "Success!",
          text: "Feedback Added Successfully",
          icon: "success",
          background: "#000",
          color: "#fff",
          showConfirmButton: false,
          timer: 1200,
          //   confirmButtonColor: "#2563eb",
        });
        router.push("/feedback");
        setMessage("");
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        position: "top-end",
        title: "Add  your Feedback successfully",
        text: "Something went wrong",
        icon: "success",
        background: "#000",
        color: "#fff",
        showConfirmButton: false,
        timer: 1200,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl"
      >
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Send Feedback
          </h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Share your thoughts and feedback with us.
          </p>
        </div>

        {/* Textarea */}
        <div className="mb-5">
          <label className="text-sm text-gray-300 mb-2 block">
            Your Message
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your feedback..."
            rows={5}
            className="w-full rounded-2xl bg-gray-950 border border-gray-700 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-fit flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl font-medium disabled:opacity-50"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <SendHorizonal size={20} />
              Submit Feedback
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
