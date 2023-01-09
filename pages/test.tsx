import x from "../styles/test.module.css";
import { jsPDF } from "jspdf";
import { useRef } from "react";

import pp from "../components/me.jpg";
import Image from 'next/image';
import Summary_line from "../components/summary_line";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle, faLocation, faPhone, faLocationPinLock, faLocationPin, faMapLocation, faLocationCrosshairs, faMapLocationDot, faMailForward, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

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

    return ( 
        <>
        <div style={{display:"flex"}}>
        <div className={x.controls}>
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
                <div contentEditable={true}>
                        Fill me and see the result
                </div>
            </div>


        </div>
        
        </div>
        <button onClick={trythis}>Click to test</button>
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