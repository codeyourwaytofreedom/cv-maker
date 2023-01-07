import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";


const Adder = ({min, max, setter, set}) => {
    return ( 
        <span style={{display:"flex", columnGap:"5px"}}> 
        <span>Add new project</span>
        <FontAwesomeIcon icon={faPlusCircle} size={"xl"} onClick={()=> set < max ? setter(set+1) : setter(set)}/>
        <span> </span>
        <FontAwesomeIcon icon={faMinusCircle} size={"xl"} onClick={()=>set > min ? setter(set-1) : setter(set)}/>
        </span> 
     );
}
 
export default Adder;