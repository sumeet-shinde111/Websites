import "../About/about.css";
import aboutImage from "../../../public/images/about/About.jpg";
const About = ()=>{
    return(
        <div className="container" id="about_us">
            <div className="innerContainer aboutInnerContainer">
                <div className="aboutUs">
                    <div className="aboutContent">
                        <h2 className="aboutTitle">
                            About us
                        </h2>
                        <div className = "aboutTagline">
                            Transforming visions into 
                            <div>
                                iconic brands
                            </div>
                        </div>
                        <div className="aboutSubTagLine">
                           Garuda Advertising is a full-service creative agency based in Pune.
                            We believe great design is good business. From ground-up branding to
                            dynamic advertising campaigns, we build powerful visual systems that
                            elevate your market presence.
                        </div>
                    </div>
                    {/* <div className="aboutImageContainer">
                        <img src={aboutImage} className="aboutImage" alt="about us Image"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About;