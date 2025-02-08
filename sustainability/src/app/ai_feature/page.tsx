"use client";

import React, { useRef } from "react";
import AiBanner from "../components/aifeature/banner";
import Chatbot from "../components/aifeature/aichat";
import EmailNewslater from "../components/UploadFile/Newslater";
import Footer from "../components/UploadFile/Footer/Index";

const AiFeature = () => {
  const uploadref = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (uploadref.current) {
      uploadref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-slate-200">
      <div>
        <AiBanner scrollDown={scrollDown} />
      </div>
      <div ref={uploadref}>
        <Chatbot />
      </div>
      <div>
        <EmailNewslater />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AiFeature;
