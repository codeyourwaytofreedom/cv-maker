import h from "../styles/cv.module.css";

const CV = () => {
    let name = "John";
    const test = (t: number) => {
        console.log(t)
    }
    return ( 
        <div className={h.cv}>
            <div className="cv_config">
                Configuration options go here...
            </div>
            <div className="cv_content">
                Content goes here...
            </div>
        </div>
     );
}
 
export default CV;