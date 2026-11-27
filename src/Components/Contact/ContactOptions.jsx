
const ContactOptions = ({src:Icon,label,value})=>{
    return(
        <>
            <div className="contactOption">
                
                <span className="contactIcon-container">
                    <Icon size={19} strokeWidth={2} />
                    </span>
                <div className="optionContainer">
                    <div className="label">{label}</div>
                    {
                        label == "Email" ? <a href="mailto:a@a.com">{value}</a> : <div className="optionValue">{value}</div>
                    }
                </div>
                
            </div>
        </>
    )
}
export default ContactOptions;