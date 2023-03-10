import { useState, useEffect, useRef } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const Summary_line = ({p_holder}) => {
    
    const [tools, setTools] = useState(null);
    const chapter_area = useRef();
    useEffect(()=> {
        const handle_outside_click = (event) => {
            if(chapter_area.current && chapter_area.current.contains(event.target))
            {
                console.log("Chapter area clicked")
            }
            else{
                setTools(false)
            }
        }
        window.document.addEventListener("click", handle_outside_click)
    },[])

    const [style, setStyle] = useState(["16px", 400]);
    return ( 
        <div className={x.cv_content_profile_summary_line} ref={chapter_area}>
            {
                style[1] === 600 ?

                        <div contentEditable={true} onFocus={()=> setTools(true)}  style={{fontSize: style[0], fontWeight: "bolder", zIndex:40}} >{p_holder}</div>
                    :
                        <div contentEditable={true} onFocus={()=> setTools(true)}  style={{fontSize: style[0], fontWeight: style[1], zIndex:40}} >{p_holder}</div>

            }
            
            <div className={x.cv_content_profile_summary_line_penholder} style={{display: tools ? "block" : "none"}}>
                <Pen cls={x.cv_tools_pen} setter={setStyle} value={style}/>
            </div>                         
        </div>
     );
}
 
export default Summary_line;