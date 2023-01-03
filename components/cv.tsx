import x from "../styles/cv.module.css";
import pp from "./me.jpg";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle, faLocation, faPhone, faLocationPinLock, faLocationPin, faMapLocation, faLocationCrosshairs, faMapLocationDot, faMailForward, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const CV = () => {


    const [name, setName] = useState(["16px", 300]);
    const [profession, setProfession] = useState(["16px", 300]);

    return ( 
        <div className={x.cv}>
            <div className={x.cv_config}>
                Configuration options go here...
            </div>
            <div className={x.cv_content}>

                <div className={x.cv_content_tools}>
                    <div className={x.cv_content_tools_joystick}>
                        <div id={x.up}><FontAwesomeIcon icon={faChevronCircleUp} size={"2x"}/></div>
                        <div id={x.m}>
                            <span><FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"}/></span>
                            <span><FontAwesomeIcon icon={faPlusCircle} size={"2x"}/></span>
                            <span><FontAwesomeIcon icon={faMinusCircle} size={"2x"}/></span>
                            <span><FontAwesomeIcon icon={faChevronCircleRight} size={"2x"}/></span>
                        </div>
                        <div id={x.down}><FontAwesomeIcon icon={faChevronCircleDown} size={"2x"}/></div>
                    </div>
                    <div className={x.cv_content_tools_pen}>
                        <button onClick={()=> setName(["16px", name[1]])}>
                            16px
                        </button>
                        <button onClick={()=> setName(["18px", name[1]])}>
                            <span>18px</span>
                        </button>
                        <button onClick={()=> setName(["20px", name[1]])}>
                            <span>20px</span>
                        </button>
                        <button onClick={()=> setName([name[0], 300])}>
                            <span>Light</span>
                        </button>
                        <button onClick={()=> setName([name[0], 400])}>
                            <span>Bold</span>
                        </button>
                    </div>
                    <div className={x.cv_content_tools_pen}>
                        <button onClick={()=> setProfession(["16px", profession[1]])}>
                            <span>16px</span>
                        </button>
                        <button onClick={()=> setProfession(["18px", profession[1]])}>
                            <span>18px</span>
                        </button>
                        <button onClick={()=> setProfession([profession[0], 300])}>
                            <span>Light</span>
                        </button>
                        <button onClick={()=> setProfession([profession[0], 400])}>
                            <span>Bold</span>
                        </button>
                    </div>
                    <br />
                    <div className={x.cv_content_tools_pencil}>
                        <button>
                            <span>16px</span>
                        </button>
                        <button>
                            <span>18px</span>
                        </button>
                        <button>
                            <span>Light</span>
                        </button>
                        <button>
                            <span>Bold</span>
                        </button>
                    </div>
                    <div className={x.cv_content_tools_pencil}>
                        <button>
                            <span>16px</span>
                        </button>
                        <button>
                            <span>18px</span>
                        </button>
                        <button>
                            <span>Light</span>
                        </button>
                        <button>
                            <span>Bold</span>
                        </button>
                    </div>
                    <div className={x.cv_content_tools_pencil}>
                        <button>
                            <span>16px</span>
                        </button>
                        <button>
                            <span>18px</span>
                        </button>
                        <button>
                            <span>Light</span>
                        </button>
                        <button>
                            <span>Bold</span>
                        </button>
                    </div>
                    
                </div>
                
                <div className={x.cv_content_profile} >
                    <div className={x.cv_content_profile_picture}>
                        <Image
                            //fill={true}
                            src={pp}
                            alt="Profile Picture"
                            style={{width:"100%", height:"100%", left:"0", top:"-40px"}}
                        />
                    </div>
                    <div className={x.cv_content_profile_summary}>
                        <input type="text" placeholder="Full name" style={{fontSize: name[0], fontWeight: name[1]}}/>
                        <input type="text" placeholder="Profession" style={{fontSize: profession[0], fontWeight: profession[1]}}/>
                        <br />
                        <span className={x.double}>
                            <FontAwesomeIcon icon={faMapLocationDot}/>
                            <input type="text" placeholder="Location" />
                        </span>
                        <span className={x.double}>
                            <FontAwesomeIcon icon={faPhone}/>
                            <input type="text" placeholder="Phone" />
                        </span>
                        <span className={x.double}>
                            <FontAwesomeIcon icon={faMailBulk}/>
                            <input type="text" placeholder="Email" />
                        </span>
                        
                        
                        
                    </div>
                </div>

                <div className={x.cv_content_details}>
                    Details
                </div>
            </div>
        </div>
     );
}
 
export default CV;