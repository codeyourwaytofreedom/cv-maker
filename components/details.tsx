import x from "../styles/cv.module.css";

const Details = () => {
    return ( 
        <div className={x.cv_content_details}>
            <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    Personal Statement
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <textarea name="eeee" cols={10} maxLength={20} style={{height:"200px"}}></textarea>
                </div>
            </div>
        </div>
     );
}
 
export default Details;