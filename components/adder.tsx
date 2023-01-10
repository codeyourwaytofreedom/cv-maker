import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";


const Adder = ({min, max, setter, set}) => {
    return ( 
        <span style={{display:"flex", columnGap:"5px"}}> 
            <span style={{fontSize:"20px", fontWeight:"600", color:"crimson"}}>Add new project</span>
            <span           style={{fontSize:"20px", border:"2px solid black", cursor:"pointer",
                            borderRadius:"50%",  width:"30px", height:"30px", 
                            fontWeight:"600",display:"grid", justifyContent:"center", 
                            alignItems:"center"}} onClick={()=> set < max ? setter(set+1) : setter(set)}>
                +
            </span>
            <span style={{fontSize:"20px", border:"2px solid black", cursor:"pointer",
                            borderRadius:"50%",  width:"30px", height:"30px", 
                            fontWeight:"600",display:"grid", justifyContent:"center", 
                            alignItems:"center"}}onClick={()=>set > min ? setter(set-1) : setter(set)}>
                -
            </span>
        </span> 
     );
}
 
export default Adder;
