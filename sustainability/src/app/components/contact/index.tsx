"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  query: string;
  issue: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setMessage("");
    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage(" Your message has been sent!");
        toast.success("Message sent successfully!");
        reset();
      } else {
        setMessage(" Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setMessage(" Error submitting form.");
      toast.error("Error submitting form");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="w-[600px] mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        {message && <p className="mb-4">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Query</label>
            <input
              {...register("query", { required: "Query is required" })}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none"
            />
            {errors.query && (
              <p className="text-red-400 text-sm">{errors.query.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Issue</label>
            <textarea
              {...register("issue", {
                required: "Issue description is required",
              })}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded focus:outline-none"
            ></textarea>
            {errors.issue && (
              <p className="text-red-400 text-sm">{errors.issue.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
