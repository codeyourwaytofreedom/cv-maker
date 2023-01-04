import x from "../styles/cv.module.css";

const Details = () => {
    return ( 
        <div className={x.cv_content_details}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    Personal Statement
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <textarea name="eeee" spellCheck={false} style={{height:"200px"}}></textarea>
                </div>
            </div>
        </div>
     );
}
 
export default Details;