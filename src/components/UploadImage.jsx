import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDropzone } from "react-dropzone";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const UploadImage = (props) => {
  const fileInputEl = useRef(null);
  const [responseText, setResponseText] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  const run = async () => {
    console.log(fileInputEl.current.files.length);
    if (fileInputEl.current.files.length > 0) {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const prompt = props.prompt;

      for (let i = 0; i < fileInputEl.current.files.length; i++) {
        const file = fileInputEl.current.files[i];
        setImage(URL.createObjectURL(file));
      }
      const imageParts = await Promise.all(
        [...fileInputEl.current.files].map(fileToGenerativePart)
      );

      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      setResponseText(text);
      console.log(text);
    }
  };

  return (
    <>
      <div {...getRootProps()}>
        <input
          {...getInputProps()}
          ref={fileInputEl}
          onChange={() => {
            run();
          }}
        />
        <p>Drop your image here</p>
      </div>
      {image && (
        <img
          style={{ width: "500px", height: "500px" }}
          src={image}
          alt="Uploaded"
        />
      )}
      <button
        onClick={() => {
          fileInputEl.current.click();
        }}
      >
        Upload Image
      </button>
      <div>
        {responseText}
      </div>
    </>
  );
};

export default UploadImage;
