import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const LifestyleAssistant = () => {
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const run = async (e) => {
    e.preventDefault();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
     You are a Professional Lifestyle Advisor. Indroduce yourself as a virtual assistant and reply by giving advice to people about ways to stay healthy
     and live a long life. Mention the importance of a balanced diet, regular exercise, and a good night's sleep.Also provide tips on how to reduce stress and anxiety.
    `
    setLoading(true);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponseText(text);
    setLoading(false);
  };

  return (
    <>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            
        }}
        >
        <h1>Lifestyle Assistant</h1>
        </div>
        <div>
        <form onSubmit={run}>
            <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
            <button

            onClick={()=>{
                setClicked(true);
            }}

            style={{
                display: 'block',
                marginTop: '20px',
                borderRadius: '15px',
                backgroundColor: 'darkblue',
                color: 'white',
                padding: '10px 20px',
            }}
            >
                Get Advice
            </button>
            </div>
        </form>


        {loading ? (
        <div style={{fontSize: "20px" , fontWeight: "bold"}}>{"Thinking..."}</div>
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
        </div>
    </>
  )
};

export default LifestyleAssistant;
