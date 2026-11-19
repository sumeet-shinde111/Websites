import ServiceCard from "./ServiceCard";
import "../Services/services.css";
import branding from "../../../public/images/services/advertising.png";
import influencerMarketing from "../../../public/images/services/influencerMarketing.png";
import videoProduction from "../../../public/images/services/video.png";
import socialMedia from "../../../public/images/services/social.png";
import webDev from "../../../public/images/services/web.png";

import socialIcon from "../../../public/images/services/socialIcon.png";
import influencerIcon from "../../../public/images/services/influencerIcon.png";
import videoIcon from "../../../public/images/services/videoIcon.png";
import webdev from "../../../public/images/services/webdevIcon.png";

const serviceData =[
    {
        name:"Social Media Marketing",
        description:"We create scroll-stopping content that captures attention and builds your brand presence.From strategy to engagement, we turn followers into a loyal community.Make your brand impossible to ignore across every social platform.",
        icon: socialIcon,
        image:socialMedia,

    },
     {
        name:"Influencer Marketing",
        description:"We connect your brand with creators who inspire trust and influence decisions.Through authentic collaborations, we help you reach the right audience.Turn powerful partnerships into meaningful brand growth.",
        icon: influencerIcon,
        image:influencerMarketing,
    },
     {
        name:"Video Production Services",
        description:"We transform your ideas into compelling visual stories that leave a lasting impression.From concept development to the final cut, every frame has a purpose.Bring your brand to life with videos that captivate and connect.",
        icon: videoIcon,
        image:videoProduction,
    },
     {
        name:"Web Design and Development",
        description:"We design visually striking websites that bring your brand's identity to life.Our responsive, high-performance solutions blend creativity with functionality.Turn visitors into customers with digital experiences built to deliver results.",
        icon: webdev,
        image:webDev,
    },
] 
const Services = ()=>{
    return(
        <div className="container" id="services">
        <div className="innerContainer servicesContainer">
            <h2 className="servicesTitle">
                Our Services
            </h2>
            <div className="servicesTagline">We turn fresh perspectives into unforgettable brands</div>
            <div className = "cardContainer">
                {
                    serviceData.map((service,index)=>{
                        return <ServiceCard key = {index} serviceName={service.name} description = {service.description} icon={service.icon} image={service.image}/>
                    })
                }
            </div>
        </div>
        </div>
    )
} 
export default Services;