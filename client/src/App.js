// import logo from './logo.svg';
import { useRef, useState,useEffect} from 'react';
import './App.css';
import React from "react";
import { uploadFile } from './services/api';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');


  const fileInputRef = useRef();
  const url = `https://i.pinimg.com/originals/4d/e0/34/4de034562650170f692e8ee2888d5fa5.jpg`

  useEffect(()=>{
    const getImage = async  ()=>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file",file);

       const response = await uploadFile(data);
       setResult(response.path);
      //  return(file.path);
      }
    }
    getImage();

  },[file])

  const onUploadClick =()=>{
    fileInputRef.current.click();
  }

  // console.log(file);
  return (
    <div className ='container'>
      <img src={url} alt="banner"/>
      <div className = 'wrapper'>
        <h1>DropMate </h1>
        <p>Upload the files and share the Download Link.</p>

        <button onClick={()=> onUploadClick()}>Upload</button>
        <input type="file"
          ref ={fileInputRef}
          style={{display:"none"}}
          onChange={(e) => setFile(e.target.files[0])}
          
        />
 <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default App;