import "../Contact/contact.css";
import linkedinIcon from "/images/contact/linkedin.png";
import instagramIcon from "/images/contact/instagram.png";
import facebookIcon from "/images/contact/facebook.png";
import whatsappIcon from "/images/contact/whatsapp.png";
import behanceIcon from "/images/contact/behance.png";
import ContactOptions from "./ContactOptions";

const contactOptions = [
    {
        label:"Email",
        value:"a@a.com",
        src:instagramIcon,
    },
    {
        label:"Phone",
        value:"1234567890",
        src:instagramIcon,
    },
    {
        label:"Location",
        value:"Pune",
        src:instagramIcon,
    }
]

const socialMedia = [
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
                    <div className="contact-innerContainer">
                         <h2 className="contactTitle"> 
                            Get in Touch
                        </h2>
                        <div className="contactTagline tagLine">
                        Let's create something great
                        </div>
                        <div className="subTagline-Contact">
                        Have a project in mind? Tell us about your vision. 
                        Let's turn your next big idea into something memorable.
                        </div>
                        <button className="conversationButton">Start Conversation</button>
                     </div>
                     <div className="contactRight-section">
                        <div className="contactOptions-Container">
                            {
                                contactOptions.map((contact,index)=>{
                                return <ContactOptions label={contact.label} value={contact.value} src ={contact.src} index = {index} key={index}/>
                                })
                            }
                                
                        </div>
                        <div className="socialMedia-Container">
                                {
                                    socialMedia.map((value,index)=>{
                                        return(
                                        <div className="option" key={index}>
                                            
                                            <a href={value.href} target="_blank" className="optionName">
                                                <img src={value.icon} alt={`${value.name} icon`} className={`optionIcon ${value.name}`}/>
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