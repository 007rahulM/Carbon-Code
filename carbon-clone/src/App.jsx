//import CodeEditor from "./components/CodeEditor";
//import WindowControls from "./components/WindowControls";
import { useState, useRef } from "react";
import "./App.css";
import Controls from "./components/Controls";
import CarbonCard from "./components/CarbonCard";
import html2canvas from "html2canvas";//import the library html2canvas for screnshoot 


function App(){
  const[theme,setTheme]=useState("dark");
  const[language,setLanguage]=useState("javascript");
  
  const[bgColor,setBgColor]=useState("#1f2937") //default garay
  //add  state for the code text
const [code, setCode] = useState("console.log('Hello,Carbon CODE!');");

const [padding,setPadding]=useState(32); 
  //create the camerea reference
  const cardRef=useRef(null);
  
  //the dowload function
  const handleExport=async()=>{

    const element=cardRef.current;
    if(!element)return;

    //convert the element to canvas
    const canvas =await html2canvas(element);


    //convert to Blob (binary file) instead of a Data URL string
    canvas.toBlob((blob)=>{
      if(!blob) return;

      //create to remorary url for the Blob
      const url=URL.createObjectURL(blob);
      const link =document.createElement("a");

      link.href=url;
      link.download="carbon-code.png";
      //append to body required for some browser to trigger dowload
      document.body.appendChild(link);
      link.click();
      //clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    },"image/png");
    // //covert canvas to a link and click it automatically
    // const dataUrl=canvas.toDataURL("imgae/png");
    // const link=document.createElement("a");
    // link.href=dataUrl;
    // link.dowload="carbon-code.png";
    // link.click();
  };

  return(
    <div  className="app-container">
      <h1 style={{color:"yellow", backgroundColor:"black", borderRadius:"10px",padding:"12px"}}> Carbon CODE </h1>
      <p>Instantly convert your source code into clean, beautiful images. Begin by typing or uploading a file...</p>

     {/* pass the state and update to the controls*/}
     {/*Controls component */}
      <Controls
       theme={theme}
       setTheme={setTheme}
       language={language}
       setLanguage={setLanguage}
       bgColor={bgColor}
       setBgColor={setBgColor}
       exportImage={handleExport} //pass the funtction to controls
      padding={padding}
      setPadding={setPadding}
      />
{/*warap carboncard in a div with the ref */}
{/*we add some padding and margin to the wrapper so the shadow doesn't get cut off in the photo */}
<div ref={cardRef} className="card-wrapper" style={{margin:"20px", maxWidth:"100%" , width:"auto"}}>

  {/* pass the state read only to the card */}
  {/*Card component */}
  
     <CarbonCard
     theme={theme}
     language={language}
     bgColor={bgColor}
     code={code}
     setCode={setCode}
     padding={padding}
     
     />

    </div>
    {/*footer */}
    <p style={{color:"#9ca3af", marginTop:"20px",fontSize:"0.9rem",textAlign:"center"}}> Created by Rahul....
       based on Carbon as reference</p>
     </div>
  );
}

export default App;