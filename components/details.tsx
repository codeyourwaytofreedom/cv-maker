import { useState } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const Details = () => {
    const [personal, setPersonal] = useState(["16px", 300])
    const [personal_details, setPersonal_details] = useState(["16px", 300])

    return ( 
        <div className={x.cv_content_details}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Personal Statement" style={{fontSize: personal[0], fontWeight: personal[1]}}/>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <textarea name="eeee" spellCheck={false} style={{height:"200px", fontSize: personal_details[0], fontWeight: personal_details[1]}}></textarea>
                </div>
            </div>

            <div className={x.cv_content_details_tools}>
                <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal} value={personal} />
                <br />
                <br />

                <Pen cls={x.cv_content_details_tools_pen} setter={setPersonal_details} value={personal_details} />
            </div>
        </div>
     );
}
 
export default Details;