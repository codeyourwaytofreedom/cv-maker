import { useRef, useState } from "react";
import x from "../styles/cv.module.css";
import Adder from "./adder";
import Chapter from "./chapter";
import Chapter_double from "./chapter_double";
import Chapter_list from "./chapter_list";
import Pen from "./pen";
import Project from "./project";
import Skill_title from "./skill_title";

const Details = () => {
    const guide = true;
    const [project_number, setProject_number] = useState(1)
    return ( 
        <div className={x.cv_content_details}>

            <Chapter  title_holder={"Personal Statement"} content_holder={"Personal statement goes here..."}/>  

            <Chapter  title_holder={"LinkedIn"} content_holder={"LinkedIn Profile"}/> 
            <Chapter  title_holder={"GitHub"} content_holder={"GitHub Profile"}/> 

            <Skill_title title_holder={"Projects"}/>
            {
                [...Array(project_number)].map( p => <Project/>)
            }
            
            <Adder min={1} max={20} setter={setProject_number} set={project_number}/>

            <Chapter_double 
                            title_holder={"Education"} 
                            content_holder_L={"Year-Year"} 
                            content_holder_R={"Faculty - Institute - etc..."} 
                            />

            <Chapter_double 
                            title_holder={"Language Skills"} 
                            content_holder_L={"Language"} 
                            content_holder_R={"Language Proficiency"} 
                            />
            <Chapter_list/>
        </div>
     );
}
 
export default Details;