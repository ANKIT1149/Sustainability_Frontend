"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../../globals.css";
import toast from "react-hot-toast";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim) {
      toast.error("False response");
      return;
    }

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        message: input,
      });

      const botMessage = { text: response.data.response, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast.error("Did not responsd");
      console.log(error);
    } finally {
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen aibot bg-gray-900 p-4 flex-col">
      <h5 className="text-white mt-5 p-2 text-3xl font-serif font-light  shadow-inner shadow-black capitalize  rounded-lg">
        Chat With AI
      </h5>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-gray-800/80 mt-10 backdrop-blur-lg rounded-xl shadow-xl p-6"
      >
        <h2 className="text-white text-lg font-semibold mb-4">Chatbot</h2>
        <div className="h-[500px] overflow-y-auto space-y-2 p-2">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg text-sm w-fit max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="flex mt-4 z-[5]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-l-lg z-[20] bg-gray-700 text-white outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 px-4 z-[100] py-2 rounded-r-lg cursor-pointer text-white hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
