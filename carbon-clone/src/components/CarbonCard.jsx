import CodeEditor from "./CodeEditor";
import WindowControls from "./WindowControls";

function CarbonCard({theme,language,bgColor,code,setCode,padding}){
    return(
        <div className="carbon-card" style={{backgroundColor:bgColor , padding:`${padding}px`, transition:"padding 0.2s ease"}}>
        <WindowControls/>
        <CodeEditor
        theme={theme}
        language={language}
        code={code}
        setCode={setCode}
        />
    </div>
    );

}

export default CarbonCard;