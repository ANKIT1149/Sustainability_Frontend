"use client";

import React, { useRef } from "react";
import UploadPage from "../components/UploadFile/Upload";
import BannerPage from "../components/UploadFile/Banner";
import Aifeature from "../components/UploadFile/AIFeature";
import Feature from "../components/UploadFile/Feature";
import EmailNewslater from "../components/UploadFile/Newslater";
import Footer from "../components/UploadFile/Footer/Index";

const Upload = () => {
  const uploadref = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (uploadref.current) {
      uploadref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-slate-200 ">
      <BannerPage scrollDown={scrollDown} />
      <div ref={uploadref}>
        <UploadPage />
      </div>
      <div className="bg-white">
        <Aifeature />
      </div>
      <div className="bg-white">
        <Feature features={[]} />
      </div>
      <div className="bg-white">
        <EmailNewslater />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Upload;
