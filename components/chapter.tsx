import x from "../styles/cv.module.css";
import { useRef, useState } from "react";
import Pen from "./pen";


const Chapter = () => {
    const [title_Styles, setTitle_Styes] = useState(["16px", 300, "none"])
    const [stly, setStly] = useState(["16px", 300, "none"])
    return ( 
        <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Chapter Title" style={{
                        fontSize: title_Styles[0], fontWeight:title_Styles[1], textDecoration:title_Styles[2], border:"1px solid silver"
                    }}/>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.editable} contentEditable={true} spellCheck={false} style={{ width:"500px",
                        fontSize: stly[0], fontWeight:stly[1], textDecoration:stly[2], border:"1px solid silver"
                        }}>    
                        Chapter Details
                    </div>
                </div>
                <div className={x.cv_content_details_chapter_content_controls}>
                        <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                        <Pen cls={x.cv_content_details_tools_pen} setter={setStly} value={stly} und={true} />
                </div>
            </div>
     );
}
 
export default Chapter;