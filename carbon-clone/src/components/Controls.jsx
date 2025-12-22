import React from "react";
function Controls({theme,setTheme,language,setLanguage,bgColor,setBgColor,exportImage,padding,setPadding}){
    return(
        <div className="controls">
            <div className="control-group">
                <label>Theme</label>
                <select value={theme} onChange={(e)=>setTheme(e.target.value)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="dracula">Dracula</option>
                    </select>
                    </div>
                    <div className="control-group">
                        <label>Language</label>
                        <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
                     <option value="javascript">JavaScript</option>
                     <option value="python">Python</option>
                     <option value="html">HTML</option>
                        </select>
                    </div>

                    {/*Backgorund color picker */}
                    <div className="control-group">
                        <label>Window Color</label>
                        <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)}
                        style={{marginLeft:"10px",cursor:"pointer"}}/>
                    </div>

                    {/*Padding slider */}
                    <div className="control-group">
                        <label>Padding</label>
                        <input type="range" 
                        min="16"
                        max="100"
                        value={padding}
                        onChange={(e)=>setPadding(Number(e.target.value))}/>
                    </div>
                    
                    {/*Add export button*/}
                    <div className="contorl-group">
                        <button onClick={exportImage}style={{
                            padding:"8px 15px", 
                            backgroundColor:"#27c93f", //green color
                            border:"none",
                            borderRadius:"5px",
                        cursor:"pointer",
                    fontWeight:"bold"}} >Export PNG </button>
                    </div>

                   
        </div>
    );
}

export default Controls;