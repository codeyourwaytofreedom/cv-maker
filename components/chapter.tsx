import x from "../styles/cv.module.css";


const Chapter = () => {
    return ( 
        <div className={x.cv_content_details_chapter}>
                <div className={x.cv_content_details_chapter_title}>
                    <input type="text" placeholder="Chapter Title"/>
                </div>
                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.editable} contentEditable={true} spellCheck={false} style={{ width:"500px"}}>    
                        Chapter Details
                    </div>
                </div>
            </div>
     );
}
 
export default Chapter;