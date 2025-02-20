/* eslint-disable @typescript-eslint/no-unused-vars */
//@typescript-eslint/no-unused-vars

import React, { useEffect, useState } from "react";
import axios from "axios";
import APIresponse from "@/dto/UploadDatadto";
import "../../../globals.css";
import toast from "react-hot-toast";
import AnswerWaste from "../../Answer";

interface AIanswer {
  waste_type: string;
  instructions: string;
  data?: undefined
}

const UploadPage: React.FC = () => {
  const [images, setImages] = useState<File | null>();
  const [status, setStatus] = useState<string>();
  const [upload, setUpload] = useState<APIresponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [answerLoading, setAnswerLoading] = useState<boolean>(false);
  const [answerbuttonDisabled, setanswerButtonDisabled] =
    useState<boolean>(false);
  const [answer, setAnswer] = useState<AIanswer>();
  const [step, setStep] = useState(1);
  
  const openPicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImages(event.target.files[0]);
    }
  };

  const handleFile = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!images) {
      setStatus("No file selected");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", images);

    setLoading(true);
    setButtonDisabled(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formdata,
        { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` } }
      );

      setUpload(response.data);
      toast.success("Image Uploaded Succcessfully and anylyzed");
      setLoading(false);
      setButtonDisabled(false);
      setStep(1);
      return;
    } catch (error) {
      console.log(error);
      toast.error("Uploading failed");
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  const storedetail = () => {
    const store = upload?.data
      ? localStorage.setItem("id", upload.data.image_id)
      : "";
    console.log(store);
  };

  useEffect(() => {
    storedetail();
  });

  const getAnswer = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAnswerLoading(true);
    setanswerButtonDisabled(true);

    const imageId = localStorage.getItem("id") as string;

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/get_recyclable/${imageId}`
      );

      setAnswer(response.data);
      console.log(response.data);
      toast.success("Getting Answer Successfully");
      setanswerButtonDisabled(false);
      setAnswerLoading(false);
      setStep(2);
      return;
    } catch (error) {
      console.log(error);
      toast.error("Getting Answer Failed");
      setanswerButtonDisabled(false);
      setAnswerLoading(false);
      setStep(1);
    }
  };
  return (
    <div className="bg-slate-200 w-[100%] h-auto overflow-hidden">
      <h1 className="text-red-700 mt-3 p-2 text-3xl font-serif font-bold max-w-md  shadow-inner shadow-black  rounded-lg">
        Upload & Anylyze
      </h1>
      <div className="w-[80%] mt-4 h-auto border-2 upload_section mx-auto rounded-2xl">
        <div className=" relative flex justify-center mx-auto items-center flex-col">
          <h1 className="mt-4 text-4xl font-serif font-bold italic border-b-red-800 border-b-2">
            Upload
          </h1>
          <input
            type="file"
            name=""
            id=""
            onChange={openPicker}
            className="cursor-pointer mt-5 w-[600px] h-[auto] z-[5] border-2 p-3 border-amber-800 rounded-xl"
          />
          <button
            type="submit"
            onClick={handleFile}
            disabled={buttonDisabled === true}
            className={`absolute ${
              buttonDisabled ? "opacity-" : "opacity-1"
            } top-[80px] right-[305px] hover:bg-transparent hover:text-black z-[5] font-serif font-bold text-2xl border-2 w-[200px] p-2 rounded-xl bg-red-900 border-red-900`}
          >
            {loading ? "Uploading...." : "Analyze"}
          </button>
        </div>
        {upload?.data ? (
          <div className="mt-5 p-2">
            <h1 className="text-red-700 mt-3 p-2 text-3xl font-serif font-bold max-w-[300px]  shadow-inner shadow-black  rounded-lg">
              Analyzed Result:
            </h1>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-white mt-3 p-2 text-4xl font-serif font-bold  shadow-inner shadow-black  rounded-lg">
                Waste-Type:{" "}
                <span className="text-white capitalize">
                  {upload.data.waste_type}
                </span>
              </h3>
              <h3 className="text-white mt-8 p-2 text-3xl font-serif font-bold max-w-lg   shadow-inner shadow-black  rounded-lg">
                Recyclable:{" "}
                <span
                  className={`${
                    upload.data.recyclable === "True"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {upload.data.recyclable ? "True" : "False"}
                </span>
              </h3>
              <h3 className="text-white mt-8 p-2 text-3xl font-serif font-bold   shadow-inner shadow-black  rounded-lg">
                Confidence: {upload.data.confidence}
              </h3>
            </div>
            <AnswerWaste
              upload={upload}
              answerLoading={answerLoading}
              answerbuttonDisabled={answerbuttonDisabled}
              getAnswer={getAnswer}
              answer={answer}
              message={""}
              step={step}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UploadPage;
