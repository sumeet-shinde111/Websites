import "../Contact/contact.css";
import icon from "/images/contact/linkedin.png";
import linkedinIcon from "/images/contact/linkedin.png";
import instagramIcon from "/images/contact/instagram.png";
import facebookIcon from "/images/contact/facebook.png";
import whatsappIcon from "/images/contact/whatsapp.png";
import behanceIcon from "/images/contact/behance.png";


const contact = [
    {
        name:"LinkedIn",
        href:"https://in.linkedin.com/in/chetangade",
        icon:linkedinIcon,
    },
    {
        name:"Instagram",
        href:" https://www.instagram.com/garudabrandworks",
        icon:instagramIcon,
    },
    {
        name:"Facebook",
        href:"https://www.facebook.com/profile.php?id=61596656724846",
        icon:facebookIcon,
    },
    {
        name:"Whatsapp",
        href:"https://wa.me/917397979730",
        icon:whatsappIcon,
    },
    {
        name:"Behance",
        href:"https://www.behance.net/chetangade",
        icon:behanceIcon,
    },
]
const Contact = ()=>{
    return(
        <>
            <div className="container" id="contact">
                <div className="innerContainer contactContainer">
                    <h2 className="contactTitle"> 
                       Get in Touch
                    </h2>
                    <div className="contact-innerContainer">
                        <div className="contactTagline tagLine">
                        Let's create something great
                        </div>
                        <div className="contactOptions-Container">
                            {
                                contact.map((value,index)=>{
                                    return(
                                    <div className="option" key={index}>
                                        
                                        <a href={value.href} target="_blank" className="optionName">
                                            <img src={value.icon} alt={`${value.name} icon`} className={`optionIcon ${value.name}`}/>
                                            <span className="socialName">{value.name}</span>
                                            </a>
                                    </div>
                                    )
                                })
                            }
                            
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
}
export default Contact;