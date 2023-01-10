import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import Adder from "./adder";
import New_skill from "./new_skill";
import Pen from "./pen";
import Skill_title from "./skill_title";

const Chapter_list = ({hide}) => {
        const [tools, setTools] = useState(null);
        const [lines, setLines] = useState(2);
        const chapter_area = useRef();
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
                {
                    [...Array(skills)].map(s=>
                            <New_skill/>
                        )
                }
                {
                    !hide ? <Adder min={1} max={20} setter={setSkills} set={skills} text={"Add new skill"}/> : null
                }
                
    </> )
}
 
export default Chapter_list;



{/* <h3>Add new skill</h3>
<span>
<FontAwesomeIcon icon={faPlusCircle} size={"xl"}/>
<span> </span>
<FontAwesomeIcon icon={faMinusCircle} size={"xl"}/>
</span> */}