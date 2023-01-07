import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import New_skill from "./new_skill";
import Pen from "./pen";



const Skill_title = () => {
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
        <>
        <div className={x.cv_content_details_chapter_title} ref={chapter_area}>
                    <input type="text" placeholder="Software Skills"  onFocus={()=> setTools("title")}
                        style={{fontSize: title_Styles[0], fontWeight: title_Styles[1], textDecoration: title_Styles[2], width:"400px"}}/>

                {
                    tools && 
                    <div className={x.cv_content_details_chapter_content}> 
                    <div className={x.cv_content_details_chapter_content_controls} id={x.software_title__controls} 
                        >

                                <h3>Title Styles</h3>
                                <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                    </div></div>
                }

                </div>
                
        </>
     );
}
 
export default Skill_title;