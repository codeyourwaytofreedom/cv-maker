import { useState } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const Summary_line = ({p_holder}) => {
    const [style, setStyle] = useState(["16px", 300]);
    return ( 
        <div className={x.cv_content_profile_summary_line}>
            <input type="text" placeholder={p_holder} style={{fontSize: style[0], fontWeight: style[1]}}/>   
            <div className={x.cv_content_profile_summary_line_penholder}>
                <Pen cls={x.cv_tools_pen} setter={setStyle} value={style}/>
            </div>                         
        </div>
     );
}
 
export default Summary_line;