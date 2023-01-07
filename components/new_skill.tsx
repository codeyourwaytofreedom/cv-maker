import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const New_skill = () => {
        const [title_Styles, setTitle_Styes] = useState(["16px", 300, "none"]);
        const [stly, setStly] = useState(["16px", 300, "none"]);
        const [tools, setTools] = useState(null);
        const [lines, setLines] = useState(2);
        const chapter_area = useRef();
        const [color, setColor] = useState("green");
        const [skills, setSkills] = useState(1);
    
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
            <div>
                {/* Control Panel */}
                <div className={x.cv_content_details_chapter_content}>   
                        {
                            tools ? 
                            <div className={x.cv_content_details_chapter_content_controls} id={x.software_controls} 
                                style={{display: tools ? "block" : "none"}}>
                                    {
                                        tools === "title" ?
                                        <>
                                        <h3>Title Styles</h3>
                                        <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                                        <h3>Add new skill</h3>
                                        <span>
                                            <FontAwesomeIcon icon={faPlusCircle} size={"2x"} 
                                                onClick={()=> skills < 10 ? setSkills(skills+1) : setSkills(skills)} />
                                            <span> </span>
                                            <FontAwesomeIcon icon={faMinusCircle} size={"2x"} 
                                                onClick={()=> skills > 0 ? setSkills(skills-1) : setSkills(skills)} />
                                        </span>
                                        </> 
                                        :
                                        tools === "content" ?
                                        <>
                                        <h3>Content Styles</h3>
                                        <Pen cls={x.cv_content_details_tools_pen} setter={setStly} value={stly} und={false} />
                                        <div id={x.education_extra}>
                                            <h3>Add/Remove Line </h3>
                                            <span>
                                                <FontAwesomeIcon icon={faPlusCircle} size={"2x"} 
                                            onClick={()=> lines < 20 ? setLines(lines+1) : setLines(lines)} />
                                            <span> </span>
                                            <FontAwesomeIcon icon={faMinusCircle} size={"2x"} 
                                            onClick={()=> lines > 0 ? setLines(lines-1) : setLines(lines)} />
                                            </span>
                                        </div>

                                        <div id={x.education_extra}>
                                            <h3>Additional notes </h3>
                                            <span style={{border:"1px solid black", borderRadius:"50%", padding:"2px",
                                                        transform:"rotate(-10deg)", backgroundColor:color, cursor:"pointer"}}>
                                                <FontAwesomeIcon icon={faCheck} size={"xl"} color={"white"}
                                            onClick={()=> color === "green" ? setColor("black") : setColor("green")} />
                                            </span>
                                        </div>


                                        </>
                                        :
                                        null
                                    }
                            </div>
                            : null
                        }
                </div>

                {/* New Software */}
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Javascript - React & Next.js"  onFocus={()=> setTools("title")}
                        style={{fontSize: title_Styles[0], fontWeight: title_Styles[1], textDecoration: title_Styles[2], width:"400px"}}/>
                </div>

                {/* Software Details */}
                {
                    [...Array(lines+1)].map(e => 
                        <div className={x.cv_content_details_chapter_content}>   
                            <div>
                                <FontAwesomeIcon icon={faLink} color={"darkgreen"}/>
                            </div>
                            <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")} style={{ width:"500px",
                                fontSize: stly[0], fontWeight:stly[1], textDecoration:stly[2]
                                }}>    
                                Content
                            </div>
                    </div>
                    )
                }
                {
                    color === "green" ?
                    <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")}
                                style={{
                                fontSize: stly[0], fontWeight: stly[1], fontFamily:"Oswald",
                                width:"500px" }}
                        >        
                                Additional notes
                    </div>
                    : null
                }

                
            </div>

        </div>
)
}
 
export default New_skill;