import { faChevronCircleUp,faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import x from "../styles/cv.module.css";
import Chapter from "./chapter";
import Chapter_double from "./chapter_double";
import Chapter_list from "./chapter_list";
import Pen from "./pen";


const Details = () => {
    const guide = true;
    return ( 
        <div className={x.cv_content_details}>

            <Chapter  title_holder={"Personal Statement"} content_holder={"Personal statement goes here..."}/>  

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