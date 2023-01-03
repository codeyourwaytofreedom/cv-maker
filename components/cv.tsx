import x from "../styles/cv.module.css";
import pp from "./me.jpg";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle, faLocation, faPhone, faLocationPinLock, faLocationPin, faMapLocation, faLocationCrosshairs, faMapLocationDot, faMailForward, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const CV = () => {
    let name = "John";
    const test = (t: number) => {
        console.log(t)
    }
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
                    <div className={x.cv_content_tools_pen}>
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
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Profession" />
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