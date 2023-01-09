import x from "../styles/test.module.css";
import { jsPDF } from "jspdf";
import { useRef } from "react";


const Test = () => {
    const test = useRef();
    const trythis = async () => {
        var doc = new jsPDF();
        doc.html(test.current, {
        callback: function (doc) {
            doc.save();
        },
        x: 10,
        y: 10,
        width:500,
        windowWidth:2400,
        autoPaging:"text",
        });
        };

    return ( 
        <>
        <div ref={test} onClick={trythis}>
        <div className={x.test}>
            With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. 
        </div>
        <div className={x.test}>
            With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. 
        </div>
        <div className={x.test}>
            With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. With the permission of Allah, I will take care of this problem as well.
            May Allah help me. 
        </div>
        </div>
        </>
     );
}
 
export default Test;