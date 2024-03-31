/*
    1) use gemini-vision api as import.meta.env.VITE_GOOGLE_API_KEY
    2) Create a drop image area with the text "Drop your files here"
    3) Add a button with the text "Upload files"
    4) convert the pdf to text and text to chunks using langchain
    5) Set prompt_template as variable that can be used across other componenets named "input_prompt" whose value will be decided on the basis of which component it is used in.
    6) Create a input area where the user can enter the query regarding the pdf file
*/

import { config } from "dotenv";
config();

// import { CharacterTextSplitter } from "langchain/text_splitter";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
// import { OpenAI } from "langchain/llms/openai";
// import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import {GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI} from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadFile = (props) => {
  const [files, setFiles] = useState([]);
  const [inputPrompt, setInputPrompt] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const run = async () => {
    let text = ""
    for (let file of files) {
      const loader = new PDFLoader(file, {
        splitPages: false,
      });
      const docs = await loader.load();
      const splitter = new CharacterTextSplitter({
        chunkSize: 200,
        chunkOverlap: 50,
      });

    //   const documents = await splitter.splitDocuments(docs);
    //   console.log(documents);

    //   const embeddings = new OpenAIEmbeddings();

    //   const vectorstore = await FaissStore.fromDocuments(documents, embeddings);
    //   await vectorstore.save("./");

    //   const vectorStore = await FaissStore.load("./", embeddings);

    //   const model = new OpenAI({ temperature: 0 });

    //   const chain = new RetrievalQAChain({
    //     combineDocumentsChain: loadQAStuffChain(model),
    //     retriever: vectorStore.asRetriever(),
    //     returnSourceDocuments: true,
    //   });
      
    // const res = await chain.invoke({
    //   query: "When does the restaurant open on friday?",
    // });
    }
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop your files here</p>
      </div>
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)} 
        placeholder="Enter your query here"
      />
      <button onClick={()=>(run())}>Upload files</button>
    </div>
  );
};

export default UploadFile;
