const Pen = ({cls, setter, value}) => {
    return ( 
            <div className={cls}>
                    <button onClick={()=> setter(["16px", value[1]])}>
                        16px
                    </button>
                    <button onClick={()=> setter(["18px", value[1]])}>
                        <span>18px</span>
                    </button>
                    <button onClick={()=> setter(["20px", value[1]])}>
                        <span>20px</span>
                    </button>
                    <button onClick={()=> setter([value[0], 300])}>
                        <span>Light</span>
                    </button>
                    <button onClick={()=> setter([value[0], 400])}>
                        <span>Bold</span>
                    </button>
            </div>
     );
}
 
export default Pen;
