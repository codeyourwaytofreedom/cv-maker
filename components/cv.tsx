import x from "../styles/cv.module.css";
import pp from "./pp.png";
import Image from 'next/image';

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
                <div className={x.cv_content_profile}>
                    <div className={x.cv_content_profile_picture}>
                        <Image
                            fill={true}
                            src={pp}
                            alt="Profile Picture"
                        />
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