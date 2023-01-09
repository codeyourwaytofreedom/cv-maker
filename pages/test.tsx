import x from "../styles/test.module.css";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import Summary_line from "../components/summary_line";


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
        <button onClick={trythis}>Click to test</button>
        <button onClick={trythis}>Click to test</button>
        <button onClick={trythis}>Click to test</button>
        <div className={x.test} ref={test} contentEditable={true} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
            maxime ab ex corporis architecto iusto praesentium non, repudiandae dolorem sint, optio id.

            <Summary_line p_holder={"Testing pdf shot"}/> 
            <div contentEditable={true} className={x.test_link}>
                    Edit me
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Test;