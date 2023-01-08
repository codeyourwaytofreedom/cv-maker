import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


const Test = () => {
    const test = useRef();
    return ( 
        <div style={{position:"relative", left:"40%", top:"300px", width:"400px"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Blanditiis ad animi nemo, repellat cupiditate vel 
            repellendus doloremque quo assumenda in officiis libero 
            quam tempora harum voluptate doloribus est soluta voluptatem?
        </div>
     );
}
 
export default Test;