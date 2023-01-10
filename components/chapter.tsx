import x from "../styles/cv.module.css";
import { useEffect, useRef, useState } from "react";
import Pen from "./pen";


const Chapter = ({guide, title_holder, content_holder}) => {
    const [title_Styles, setTitle_Styes] = useState(["16px", 300, "none"]);
    const [stly, setStly] = useState(["16px", 400, "none"]);
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


    return ( 
        <div className={x.cv_content_details_chapter} ref={chapter_area}>
                <div className={x.cv_content_details_chapter_title}>
{/*                     <input type="text" placeholder={title_holder} onFocus={()=> setTools("title")} style={{
                        fontSize: title_Styles[0], fontWeight:title_Styles[1] === 600 ? "bolder" : "400", textDecoration:title_Styles[2] === "underline" ? "underline" : "none", 
                        border:guide ? "1px solid silver" : "none"
                    }}/> */}
                    <div contentEditable={true}  onFocus={()=> setTools("title")} style={{
                        fontSize: title_Styles[0], fontWeight:title_Styles[1] === 600 ? "bolder" : "400", textDecoration:title_Styles[2] === "underline" ? "underline" : "none", 
                        border:guide ? "1px solid silver" : "none",
                    }}>
                            {title_holder}
                    </div>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")} style={{ width:"540px",
                        fontSize: stly[0], fontWeight:stly[1] === 600 ? "bolder" : "400", border:guide ? "1px solid silver" : "none"
                        }}>    
                        {content_holder}
                    </div>
                </div>
                <div className={x.cv_content_details_chapter_content_controls} style={{display: tools ? "block" : "none"}}>
                        {
                            tools === "title" ?
                            <>
                            <h3>Title Styles</h3>
                            <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                            </>
                            :
                            <>
                            <h3>Content Styles</h3>
                            <Pen cls={x.cv_content_details_tools_pen} setter={setStly} value={stly} und={false} />
                            </>
                        }
                </div>
            </div>
     );
}
 
export default Chapter;