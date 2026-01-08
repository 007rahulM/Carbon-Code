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
 const getThemeConfig = (themeName) => {
        if (themeName === "dracula") {
            return { extension: dracula, bg: "#282a36" };
        }
        if (themeName === "light") {
            return { extension: "light", bg: "#ffffff" };
        }
        // Default for "dark"
        return { extension: "dark", bg: "#282a36" };
    };

    const themeConfig = getThemeConfig(theme);

    return (
        <div 
        style={{ 
            resize: "horizontal",
            overflow: "hidden",
            minWidth: "300px",
            minHeight: "100px",
            borderRadius: "12px",
            // FIX: Use the dynamic background color here
            background: themeConfig.bg, 
            width: "auto",
            maxWidth: "100%",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}>
            <CodeMirror
                theme={themeConfig.extension}
                value={code}
                height="auto"
                extensions={[...getLanguageExtension(language), EditorView.lineWrapping]}
                onChange={onChange}
                style={{fontSize:"16px", fontFamily:'"Fira Code", monospace'}}
                basicSetup={{
                    lineNumbers: false,
                    foldGutter: false,
                    highlightActiveLine: false
                }}
            />
        </div>
    );
}

//export the xomponent so we can use it in App.jsx
export default CodeEditor;