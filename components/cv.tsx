import x from "../styles/cv.module.css";
import pp from "./me.jpg";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle, faLocation, faPhone, faLocationPinLock, faLocationPin, faMapLocation, faLocationCrosshairs, faMapLocationDot, faMailForward, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Details from "./details";

import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import h2c from "html2canvas";
import Pen from "./pen";
import Summary_line from "./summary_line";


const CV = () => {
    const inputRef = useRef();
    const ppic = useRef();
    const [test_text, setTest_text] = useState("Download");

    const handleDownloadPdf = async () => {
        const element = inputRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
      };
    
      const trythis = async () => {
        var doc = new jsPDF();
        doc.html(inputRef.current, {
        callback: function (doc) {
            doc.save();
        },
        x: 10,
        y: 10,
        width:900,
        windowWidth:2400,
        autoPaging:"text",
        });
        };

    const [position, setPosition] = useState([0,0, 100]);
    return ( 
        <div className={x.cv}>
            <div className={x.cv_config}>
                Configuration options go here...
                <button onClick={trythis}>{test_text}</button>
            </div>

            <div className={x.cv_tools} >
                    <div className={x.cv_tools_joystick}>
                        <div id={x.up}><FontAwesomeIcon icon={faChevronCircleUp} size={"2x"} onClick={()=> setPosition([position[0], position[1]-1, position[2]])}/></div>
                        <div id={x.m}>
                            <span><FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} onClick={()=> setPosition([position[0]-1,position[1], position[2]])}/></span>
                            <span><FontAwesomeIcon icon={faPlusCircle} size={"2x"} onClick={()=> setPosition([position[0],position[1], position[2]+1])}/></span>
                            <span><FontAwesomeIcon icon={faMinusCircle} size={"2x"}onClick={()=> setPosition([position[0],position[1], position[2]-1])}/></span>
                            <span><FontAwesomeIcon icon={faChevronCircleRight} size={"2x"} onClick={()=> setPosition([position[0]+1,position[1], position[2]])}/></span>
                        </div>
                        <div id={x.down}><FontAwesomeIcon icon={faChevronCircleDown} size={"2x"} onClick={()=> setPosition([position[0], position[1]+1, position[2]])}/></div>
                    </div>
                    {/* <Pen cls={x.cv_tools_pen} setter={setName} value={name}/> */}
{/*                     <Pen cls={x.cv_tools_pen} setter={setProfession} value={profession}/>
                    <br />
                    <Pen cls={x.cv_tools_pencil} setter={setLocation} value={location}/>
                    <Pen cls={x.cv_tools_pencil} setter={setPhone} value={phone}/>
                    <Pen cls={x.cv_tools_pencil} setter={setEmail} value={email}/>  */}
            </div>

            <div className={x.cv_content} ref={inputRef} >
                <div className={x.cv_content_profile}>
                    <div className={x.cv_content_profile_picture}>
                        <Image ref={ppic}
                            //fill={true}
                            src={pp}
                            alt="Profile Picture"
                            style={{width:`${position[2]}%`, height:"100%", left:position[0], top:position[1]}}
                        />
                    </div>
                    <div className={x.cv_content_profile_summary}>
                        <Summary_line p_holder={"Full name"}/>
                        <Summary_line p_holder={"Profession"}/>                        
                        <br />
                        <Summary_line p_holder={"Location"} icon={
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                        }/>
                        <Summary_line p_holder={"Phone"} icon={
                            <FontAwesomeIcon icon={faPhone}/>
                        }/>
                        <Summary_line p_holder={"Email"} icon={
                            <FontAwesomeIcon icon={faMailBulk}/>
                        }/>
                    </div>
                </div>

                <Details/>
            </div>
            
        </div>
     );
}
 
export default CV;