import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const LifestyleAssistant = () => {
  const [responseText, setResponseText] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async (e) => {
    e.preventDefault();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Introduce yourself as a professional lifestyle advisor.
    `
    setLoading(true);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponseText(text);
    setLoading(false);
    console.log(text);
  };

  return (
    <>
        <h1>Lifestyle Assistant</h1>
        <div>
        <form onSubmit={run}>
            {/* <input type='text' 
            placeholder="Enter your query"
            value={query}
            onChange={(e)=>{
                setQuery(e.target.value)
            }}
            style={{
                borderRadius: '15px',
                width: '800px',
                height: '40px',
                padding: '5px 10px',
                fontSize: '18px'
            }}
             /> */}
            <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
            <button
            style={{
                display: 'block',
                marginTop: '20px',
                borderRadius: '15px',
                backgroundColor: 'darkblue',
                color: 'white',
                padding: '10px 20px',
            }}
            >
                Submit
            </button>
            </div>
        </form>
        <pre
        style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontSize: '15px',
        }}
        >
           <ReactMarkdown>{responseText}</ReactMarkdown>
        </pre>
        </div>
    </>
  )
};

export default LifestyleAssistant;
