import { faChevronCircleUp,faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const Details = () => {
    const [personal, setPersonal] = useState(["16px", 300, "none"])
    const [personal_details, setPersonal_details] = useState(["16px", 300,])
    const [textareaHeight, setTHeight] = useState(200)

    return ( 
        <div className={x.cv_content_details}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Personal Statement" style={{fontSize: personal[0], fontWeight: personal[1], textDecoration: personal[2]}}/>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <textarea name="eeee" rows={30} spellCheck={false} style={{height:`${textareaHeight}px`, fontSize: personal_details[0], fontWeight: personal_details[1]}}></textarea>
                </div>
                <div contentEditable={true}>
                    Hello
                </div>
            </div>

            <div className={x.cv_content_details_tools}>
                <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal} value={personal} und={true} />
                <br />
                <br />

                <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal_details} value={personal_details} />
                <div className={x.cv_content_details_tools_pen}>
                        <FontAwesomeIcon icon={faChevronCircleUp} size={"2x"} onClick={()=> setTHeight(textareaHeight-5)}/>
                        <FontAwesomeIcon icon={faChevronCircleDown} size={"2x"} onClick={()=> setTHeight(textareaHeight+5)}/>
                </div>
            </div>
        </div>
     );
}
 
export default Details;