const Pen = ({cls, setter, value, und}) => {
    return ( 
            <div className={cls}>
                    <button onClick={()=> setter(["16px", value[1],value[2]])}>
                        16px
                    </button>
                    <button onClick={()=> setter(["18px", value[1],value[2]])}>
                        <span>18px</span>
                    </button>
                    <button onClick={()=> setter(["20px", value[1],value[2]])}>
                        <span>20px</span>
                    </button>
                    <button onClick={()=> setter([value[0], 300,value[2]])}>
                        <span>Light</span>
                    </button>
                    <button onClick={()=> setter([value[0], 400,value[2]])}>
                        <span>Bold</span>
                    </button>
                    {
                        und ? 
                        <button onClick={()=> value[2] === "none" ? setter([value[0], value[1], "underline"]) :setter([value[0], value[1], "none"]) }>
                            <span>Underline</span>
                        </button>
                        : null
                    }
                    
            </div>
     );
}
 
export default Pen;
