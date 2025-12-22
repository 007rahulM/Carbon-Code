import React from "react";
//no curly braces {} bcz it is the defualt export
import CodeMirror from "@uiw/react-codemirror";
import {dracula} from "@uiw/codemirror-theme-dracula";

//this is a named export ,s o we keep the {} 
import {javascript} from "@codemirror/lang-javascript";
import {python} from "@codemirror/lang-python";
import {html} from "@codemirror/lang-html";
import { EditorView } from "@codemirror/view";

function CodeEditor({theme,language,code,setCode}){
    const onChange= React.useCallback((value)=>{
        setCode(value);
        },[setCode]);

        //helper function to pick the right tool
        const getLanguageExtension=(lang)=>{
            if(lang ==="python"){
                return [python()];
            }
            if(lang==="html"){
                return [html()];
            }
            //default to js
            return[javascript({jsx:true})];
        };

        //pick the theme
        //we cant just pass the string dracula we must pass the imported object
        const getThemeExtension=(themeName)=>{
            if(themeName === "dracula"){
                return dracula;
            }
            //for dark and light we,can just return the string name
            return themeName;
        }

    return(
        <div 
        style={{ 
            resize: "both", 
            overflow: "hidden", /* Required for resize handle to show */
            minWidth: "300px",
            minHeight: "100px",
            borderRadius: "0 0 12px 12px",
            background: "#282a36", /* Match dracula bg so no white gaps appear */
            width:"fit-content"  
        }}>

        <CodeMirror
        theme={getThemeExtension(theme)}
        value="console.log('hello world!');"
        height="auto"
        minWidth="100px"
        extensions={[...getLanguageExtension(language),EditorView.lineWrapping]}
        onChange={onChange}
        code={code}
        basicSetup={{
            lineNumbers:false,
            foldGutter:false,
            highlightActiveLine:false
        }}
        style={{fontSize:"14px", fontFamily:'"Fira Code", monospace'}}
        />
        </div>
    );
}

//export the xomponent so we can use it in App.jsx
export default CodeEditor;