import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";
import Explain from "./explain";

const Project = () => {
    const [title_Styles, setTitle_Styes] = useState(["16px", 300, "none"]);
    const [stly, setStly] = useState(["16px", 300, "none"]);
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
        <div className={x.cv_content_details_chapter} ref={chapter_area} style={{borderBottom:"none", paddingBottom:"0"}}>
            <div>
                {/* Control Panel */}
                <div className={x.cv_content_details_chapter_content}>   
                        {
                            tools && tools === "content" &&
                            <div className={x.cv_content_details_chapter_content_controls} id={x.software_controls}>

                                        <h3>Title Styles</h3>
                                        <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                            </div>
                        }
                </div>

                <div className={x.cv_content_details_chapter_content}>   
                    <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")} style={{ width:"500px",
                        fontSize: title_Styles[0], fontWeight:title_Styles[1]  === 600 ? "bolder" : "400", textDecoration:title_Styles[2]
                        }}>    
                        Project Name
                    </div>
                </div>

            </div>

            <div  ref={chapter_area}>
                {/* Control Panel */}
                <div className={x.cv_content_details_chapter_content}>   
                    <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("project_detail")} style={{ width:"500px",
                        fontSize: stly[0], fontWeight:stly[1] === 600 ? "bolder" : "400", textDecoration:stly[2]
                        }}>    
                        Details
                    </div>
                        {
                            tools && tools === "project_detail" &&
                            <div className={x.cv_content_details_chapter_content_controls} id={x.software_controls}>
                                <h3>Detail Styles</h3>
                                <Pen cls={x.cv_content_details_tools_pen} setter={setStly} value={stly} und={false} />
                            </div>
                        }
                </div>
            </div>
        </div>
     );
}
 
export default Project;