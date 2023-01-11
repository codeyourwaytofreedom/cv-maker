import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";


const Adder = ({min, max, setter, set, text}) => {
    return ( 
        <span style={{display:"flex", columnGap:"5px", alignItems:"center", paddingLeft:"10px"}}> 
            <span style={{fontSize:"20px", fontWeight:"600", color:"crimson"}}>{text}</span>
            <FontAwesomeIcon icon={faPlusCircle} size={"2x"} onClick={()=> set < max ? setter(set+1) : setter(set)}/>
            <FontAwesomeIcon icon={faMinusCircle} size={"2x"} onClick={()=>set > min ? setter(set-1) : setter(set)}/>
        </span> 
     );
}
 
export default Adder;
