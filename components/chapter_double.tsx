import { faChevronCircleUp,faChevronCircleDown, faPlusCircle, faMinusCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import x from "../styles/cv.module.css";
import Pen from "./pen";


const Chapter_double = ({guide, title_holder, content_holder_L, content_holder_R}) => {

    const [title_Styles, setTitle_Styes] = useState(["16px", 300, "none"]);
    const [stly, setStly] = useState(["16px", 300, "none"]);
    const [tools, setTools] = useState(null);
    const [lines, setLines] = useState(2);
    const chapter_area = useRef();
    const guide_border = "1px solid silver";
    const [color, setColor] = useState("green")

    useEffect(()=> {
        const handle_outside_click = (event) => {
            if(chapter_area.current && chapter_area.current.contains(event.target))
            {
                console.log("Chapter area clicked")
            }
            else{
                setTools(false)
            }
        }
        window.document.addEventListener("click", handle_outside_click)
    },[])
    return ( 
                <div className={x.cv_content_details_chapter} ref={chapter_area}>
                <div className={x.cv_content_details_chapter_title}>
{/*                     <input type="text" placeholder={title_holder}  onFocus={()=> setTools("title")}
                        style={{fontSize: title_Styles[0], fontWeight: title_Styles[1], textDecoration: title_Styles[2],
                        border:guide ? guide_border : "none"}}/> */}
                    <div contentEditable={true} onFocus={()=> setTools("title")}
                        style={{ color:"navy", fontSize: title_Styles[0], fontWeight: title_Styles[1] === 600 ? "bolder" : "400", textDecoration: title_Styles[2],
                        border:guide ? guide_border : "none"}}>
                        {title_holder}
                    </div>
                </div>

                <div className={x.cv_content_details_chapter_content}>
                    <div id={x.education_double}>
                        <div id={x.editable} contentEditable={true} onFocus={()=> setTools("content")}
                            style={{width:"90px",fontWeight: "bolder",fontSize:stly[0],
                            border:guide ? guide_border : "none",}}>
                            {content_holder_L}
                        </div>
                        <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")}
                                style={{
                                fontSize: stly[0], fontWeight: stly[1] === 600 ? "bolder" : "400", fontFamily:"Oswald",
                                border:guide ? guide_border : "none",
                                width:"400px" }}
                        >        
                                {content_holder_R}
                        </div>
                    </div>
                    {
                        tools ? 
                        <div className={x.cv_content_details_chapter_content_controls} id={x.education_controls} 
                            style={{display: tools ? "block" : "none"}}>
                                {
                                    tools === "title" ?
                                    <>
                                    <h3>Title Styles</h3>
                                    <Pen cls={x.cv_content_details_tools_pen} setter={setTitle_Styes} value={title_Styles} und={true} />
                                    </> 
                                    :
                                    tools === "content" ?
                                    <>
                                    <h3>Content Styles</h3>
                                    <Pen cls={x.cv_content_details_tools_pen} setter={setStly} value={stly} und={false} />
                                    <div id={x.education_extra}>
                                        <h3>Add/Remove Line </h3>
                                        <span>
                                            <FontAwesomeIcon icon={faPlusCircle} size={"2x"} 
                                        onClick={()=> lines < 5 ? setLines(lines+1) : setLines(lines)} />
                                        <span> </span>
                                        <FontAwesomeIcon icon={faMinusCircle} size={"2x"} 
                                        onClick={()=> lines > 0 ? setLines(lines-1) : setLines(lines)} />
                                        </span>
                                    </div>

                                    <div id={x.education_extra}>
                                        <h3>Additional notes </h3>
                                        <span style={{border:"1px solid black", borderRadius:"50%", padding:"1px",width:"30px", height:"30px",
                                                    transform:"rotate(-10deg)", backgroundColor:color, cursor:"pointer"}}>
                                            <FontAwesomeIcon icon={faCheck} size={"xl"} color={"white"}
                                        onClick={()=> color === "green" ? setColor("black") : setColor("green")} />
                                        </span>
                                    </div>
                                    </>
                                    :
                                    null
                                }
                        </div>
                        : null
                    }
                </div>

                {
                    [...Array(lines)].map(e=>
                        <div className={x.cv_content_details_chapter_content}>
                            <div id={x.education_double}>
                                <div id={x.editable} contentEditable={true} onFocus={()=> setTools("content")}
                                style={{width:"90px",fontWeight: "bolder", fontSize:stly[0], border:guide ? guide_border : "none",}}>
                                    {content_holder_L}
                                </div>
                                <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")}
                                        style={{
                                        fontSize: stly[0], fontWeight: stly[1], fontFamily:"Oswald", width:"400px",
                                        border:guide ? guide_border : "none", }}
                                >        
                                        {content_holder_R}
                                </div>
                            </div>
                        </div>
                        )
                } 
                {
                    color === "green" ?
                    <div id={x.editable} contentEditable={true} spellCheck={false} onFocus={()=> setTools("content")}
                                style={{
                                fontSize: stly[0], fontWeight: stly[1], fontFamily:"Oswald",
                                border:guide ? guide_border : "none",
                                width:"500px" }}
                        >        
                                Additional notes
                    </div>
                    : null
                }
                
                </div>
     );
}
 
export default Chapter_double;