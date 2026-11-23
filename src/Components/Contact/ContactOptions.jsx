
const ContactOptions = ({src,label,value})=>{
    return(
        <>
            <div className="contactOption">
                
                <span className="contactIcon-container">
                    <img src={src} alt={label+" image"} className="contactIcon"/>
                    </span>
                <div className="optionContainer">
                    <div className="label">{label}</div>
                    <div className="optionValue">{value}</div>
                </div>
                
            </div>
        </>
    )
}
export default ContactOptions;