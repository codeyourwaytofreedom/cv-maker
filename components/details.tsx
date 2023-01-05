import { faChevronCircleUp,faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import x from "../styles/cv.module.css";
import Chapter from "./chapter";
import Pen from "./pen";


const Details = () => {
    const [personal, setPersonal] = useState(["16px", 300, "none"])
    const [personal_details, setPersonal_details] = useState(["16px", 300,])
    const [education, setEducation] = useState(["16px", 300, "none"])
    const [educationDetails, seteducationDetails] = useState(["16px", 300, "none"])
    const [guide, setGuide] = useState(true);
    const [education_lines, setEducationLines] = useState(2);

    const test = useRef();

    return ( 
        <div className={x.cv_content_details}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Personal Statement" style={{fontSize: personal[0], fontWeight: personal[1], textDecoration: personal[2]}}/>
                    <div className={x.cv_content_details_chapter_content_controls}>
                        <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal} value={personal} und={true} />
                    </div>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.editable} contentEditable={true} ref={test} spellCheck={false} style={{ width:"500px",
                            fontSize: personal_details[0], fontWeight: personal_details[1], fontFamily:"Oswald",
                            border:guide ? "1px solid gray" : "none" }}
                            onSelect={()=> 
                                {
                                    console.log(window.getSelection().toString());
                                }
                            }
                            onKeyDown={()=> console.log("new letter detected")}
                            >        
                    </div>
                    <div className={x.cv_content_details_chapter_content_controls}>
                        <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal_details} value={personal_details} und={false} />
                    </div>
                </div>
            </div>

            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Education" style={{fontSize: education[0], fontWeight: education[1], textDecoration: education[2]}}/>
                    <div className={x.cv_content_details_chapter_content_controls}>
                        <Pen cls={x.cv_content_details_tools_pen} setter={setEducation} value={education} und={true} />
                    </div>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.education_double}>
                        <div id={x.editable} contentEditable={true} style={{width:"90px",fontWeight:"400",fontSize:educationDetails[0],
                     border:guide ? "1px solid gray" : "none",}}>
                            Year-Year
                        </div>
                        <div id={x.editable} contentEditable={true} ref={test} spellCheck={false} style={{
                                fontSize: educationDetails[0], fontWeight: educationDetails[1], fontFamily:"Oswald",
                                border:guide ? "1px solid gray" : "none",
                                width:"400px" }}
                        >        
                                Faculty - Institution - etc
                        </div>
                    </div>
                    <div className={x.cv_content_details_chapter_content_controls}>
                        <Pen cls={x.cv_content_details_tools_pen} setter={seteducationDetails} value={educationDetails} und={false} />
                        <div id={x.education_extra}>
                            <FontAwesomeIcon icon={faChevronCircleUp} size={"2x"} 
                            onClick={()=> education_lines < 5 ? setEducationLines(education_lines+1) : setEducationLines(education_lines)} />
                            <FontAwesomeIcon icon={faChevronCircleDown} size={"2x"} 
                            onClick={()=> education_lines > 0 ? setEducationLines(education_lines-1) : setEducationLines(education_lines)} />
                        </div>
                    </div>
                </div>


                {
                    [...Array(education_lines)].map(e=>
                        <div className={x.cv_content_details_chapter_content}>
                            <div id={x.education_double}>
                                <div id={x.editable} contentEditable={true} style={{width:"90px",fontSize:educationDetails[0], 
                                border:guide ? "1px solid gray" : "none",}}>
                                    Year-Year
                                </div>
                                <div id={x.editable} contentEditable={true} spellCheck={false} style={{
                                        fontSize: educationDetails[0], fontWeight: educationDetails[1], fontFamily:"Oswald", width:"400px",
                                        border:guide ? "1px solid gray" : "none", }}
                                >        
                                        Faculty - Institution - etc
                                </div>
                            </div>
                        </div>
                        )
                }     
                <br />
                <Chapter/>        
            </div>
        </div>
     );
}
 
export default Details;