import x from "../styles/test.module.css";
import { jsPDF } from "jspdf";
import { useRef } from "react";

//import pp from "../components/tiger.jpeg";
import pp from "../components/me.jpg";
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
    const test = useRef();
    const trythis = async () => {
        var doc = new jsPDF();
        doc.html(test.current, {
        callback: function (doc) {
            doc.save();
        },
        x: 0,
        y: 0,
        width:919,
        windowWidth:3500,
        autoPaging:"text",
        });
        };

        const [project_number, setProject_number] = useState(1)

    return ( 
        <>
        <div style={{display:"flex"}}>
        <div className={x.controls}>
            <button onClick={trythis}>Download my CV</button>
            <div className={x.controls_animation}>

            </div>
        </div>
        <div className={x.cv} ref={test} >
            <div className={x.cv_summary}>
                <div className={x.cv_summary_picture}>
                <Image
                    src={pp}
                    alt="Profile Picture"
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
                <Chapter  title_holder={"Personal Statement"} content_holder={"Personal statement goes here..."}/>  
                <Chapter  title_holder={"LinkedIn"} content_holder={"LinkedIn Profile"}/> 
                <Chapter  title_holder={"GitHub"} content_holder={"GitHub Profile"}/> 

                <Skill_title title_holder={"Projects"}/>
                {
                    [...Array(project_number)].map( p => <Project/>)
                }
                <Adder min={1} max={20} setter={setProject_number} set={project_number} text={"Add new project"}/>

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
                <Chapter_list/>

            </div>


        </div>
        
        </div>
        </>
     );
}
 
export default Test;


/* Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Dolore consectetur voluptatibus sint libero laboriosam harum nostrum facilis 
exercitationem cumque inventore magni ducimus modi natus ea quasi, 
qui architecto veritatis in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Ducimus nostrum necessitatibus dolores quis esse provident voluptatum, eveniet 
maxime ab ex corporis architecto iusto praesentium non, repudiandae dolorem sint, optio id.
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Dolore consectetur voluptatibus sint libero laboriosam harum nostrum facilis 
exercitationem cumque inventore magni ducimus modi natus ea quasi, 
qui architecto veritatis in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Ducimus nostrum necessitatibus dolores quis esse provident voluptatum, eveniet 
maxime ab ex corporis architecto iusto praesentium non, repudiandae dolorem sint, optio id. */