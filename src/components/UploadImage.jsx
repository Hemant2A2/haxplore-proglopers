import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDropzone } from "react-dropzone";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const UploadImage = (props) => {
  const fileInputEl = useRef(null);
  const [responseText, setResponseText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

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

      setLoading(true);
      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      setResponseText(text);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        {...getRootProps()}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          {...getInputProps()}
          ref={fileInputEl}
          onChange={() => {
            run();
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {image && (
          <img
            style={{ width: "500px", height: "500px" }}
            src={image}
            alt="Uploaded"
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            fileInputEl.current.click();
            setResponseText("");
            setImage(null);
            setClicked(true);
          }}
          style={{
            display: "block",
            marginTop: "20px",
            borderRadius: "15px",
            backgroundColor: "darkblue",
            color: "white",
            padding: "10px 20px",
          }}
        >
          Drop your Image here
        </button>
      </div>
      
      {loading ? (
        <div>{props.loading}</div>
      ) : (
        clicked ? (
          <div style={{backgroundColor: "white" , padding: "15px" , marginTop: "10px"}}>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              fontSize: "13px",
              color: "black",
            }}
          >
            <ReactMarkdown>
            {responseText}
            </ReactMarkdown>
          </pre>
          </div>
      ) : (
        <div></div>))}
      
    </>
  );
};

export default UploadImage;
