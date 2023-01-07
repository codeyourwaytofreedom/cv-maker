import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import New_skill from "./new_skill";
import Pen from "./pen";
import Skill_title from "./skill_title";

const Chapter_list = () => {
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
           
                <Skill_title title_holder={"Software Skills"}/>
                {
                    [...Array(skills)].map(s=>
                            <New_skill/>
                        )
                }
               
                <span style={{display:"flex", columnGap:"5px"}}> 
                <span>Add new skill</span>
                <FontAwesomeIcon icon={faPlusCircle} size={"xl"} onClick={()=> skills < 10 ? setSkills(skills+1) : setSkills(skills)}/>
                <span> </span>
                <FontAwesomeIcon icon={faMinusCircle} size={"xl"} onClick={()=>skills > 1 ? setSkills(skills-1) : setSkills(skills)}/>
                </span> 
    </> )
}
 
export default Chapter_list;



{/* <h3>Add new skill</h3>
<span>
<FontAwesomeIcon icon={faPlusCircle} size={"xl"}/>
<span> </span>
<FontAwesomeIcon icon={faMinusCircle} size={"xl"}/>
</span> */}