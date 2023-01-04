import x from "../styles/cv.module.css";

import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Details = () => {
    const inputRef = useRef();
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("download.pdf");
        });
    };

    return ( 
        <div className={x.cv_content_details} ref={inputRef}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    Personal Statement
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <textarea name="eeee" spellCheck={false} style={{height:"200px"}}></textarea>
                </div>
            </div>
            <button onClick={printDocument}>TEST</button>
        </div>
     );
}
 
export default Details;