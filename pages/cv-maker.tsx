import x from "../styles/test.module.css";
import { jsPDF } from "jspdf";
import { useEffect, useRef } from "react";

//import pp from "../components/tiger.jpeg";
import pp from "../components/mm.jpg";
import Image from 'next/image';
import Summary_line from "../components/summary_line";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle, faLocation, faPhone, faLocationPinLock, faLocationPin, faMapLocation, faLocationCrosshairs, faMapLocationDot, faMailForward, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Chapter from "../components/chapter";
import Chapter_double from "../components/chapter_double";
import Skill_title from "../components/skill_title";
import Project from "../components/project";
import Adder from "../components/adder";
import Chapter_list from "../components/chapter_list";

const Test = () => {
    const cv = useRef();
    const anchor = useRef();
    const [total_height, setTotalHeight] = useState(1131);
    const [mult, setMult] = useState(null);
    const [sizes, setSizes] = useState(1)

    useEffect(()=>{
        setTotalHeight(anchor.current.offsetTop);
        setSizes(parseInt(total_height/1131)+1)
        const update = ()=> {
            if(anchor.current)
            {setTotalHeight(anchor.current.offsetTop);}
        }
        window.addEventListener("click", update)
        window.addEventListener("keydown", update)
    });

    const trythis = () => {
        setHide(true)
        setMult((parseInt(total_height/1131)+1)*1131)
            setTimeout(() => {
                var doc = new jsPDF();
                doc.html(cv.current, {
                callback: function (doc) {
                    doc.save();
                },
                x: 0,
                y: 0,
                marginTop:3,
                width:919,
                windowWidth:3500,
                autoPaging:"text",
                });
            }, 700);
        setTimeout(() => {
            setMult(null)
            setHide(false)
        }, 1000);
        };
    const [project_number, setProject_number] = useState(1)
    const [hide, setHide] = useState(false);
    const colors = ["#E6B0AA ", "#F5B7B1 ", " #D7BDE2", "#D2B4DE ", "#A9CCE3 ", " #AED6F1"," #A3E4D7", "#A2D9CE ", "#A9DFBF ", " #ABEBC6",
                    "#F9E79F ", "#FAD7A0 ", "#F5CBA7 ", "#EDBB99 ", "#F7F9F9 ", " #E5E7E9","#D5DBDB ", "#D5DBDB ", "#AEB6BF ", "#ABB2B9 "
                    ]
    const [color, setColor] = useState("white")
    return ( 
        <>
        <div style={{display:"flex"}}>
        <div className={x.controls}>
            <div className={x.controls_animation}>
            </div>
            <button id={x.download} onClick={trythis}>Download my CV</button>
            <div id={x.colors}>
                {
                    colors.map(c =>
                        <button style={{backgroundColor:c}} value={c} onClick={()=> setColor(c)}></button>
                    )
                }
            </div>
        </div>
        <div className={x.cv} ref={cv} >
            <div className={x.cv_summary} style={{backgroundColor:color, height:mult ? mult : "auto"}}>
                <div className={x.cv_summary_picture}>
                <Image
                    src={pp}
                    alt="Profile Picture"
                    sizes="230px"
                />
                </div>
                <div className={x.cv_summary_text}>
                    <Summary_line p_holder={"Full name"}/>
                    <Summary_line p_holder={"Profession"}/>                        
                    <br />
                    <Summary_line p_holder={"Location"}/>
                    <Summary_line p_holder={"Phone"}/>
                    <Summary_line p_holder={"Email"}/>
                </div>
            </div>

            <div className={x.cv_details}>
                {
                    [...Array(sizes)].map((e,i)=>
                        <div style={{position:"absolute", top:1121*(i+1),width:"120px", left:"-130px", border:"2px solid red"}}>
                            <h3 style={{position:"absolute", top:"-30px"}}>Page Break {i+1}</h3>
                        </div>
                    )
                }



                <Chapter  title_holder={"Personal Statement"} content_holder={"Personal statement goes here..."}/>  
                <Chapter  title_holder={"LinkedIn"} content_holder={"LinkedIn Profile"}/> 
                <Chapter  title_holder={"GitHub"} content_holder={"GitHub Profile"}/> 

                <Skill_title title_holder={"Projects"}/>
                {
                    [...Array(project_number)].map( p => <Project/>)
                }
                {
                    !hide ? <Adder min={1} max={20} setter={setProject_number} set={project_number} text={"Add new project"}/> : null
                }
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
                <Skill_title title_holder={"Software Skills"}/>
                <Chapter_list hide={hide}/>
            </div>


        </div>
       
        
        </div>
        <div ref={anchor}></div>
        </>
     );
}
 
export default Test;