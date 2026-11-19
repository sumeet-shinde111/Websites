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
        description:"Build connections, spark conversations, and grow your online presence.",
        icon: socialIcon,
        image:socialMedia,

    },
     {
        name:"Influencer Marketing",
        description:"Connect your brand with the right voices and authentic audiences.",
        icon: influencerIcon,
        image:influencerMarketing,
    },
     {
        name:"Video Production Services",
        description:"Create compelling visuals that tell your story and capture attention.",
        icon: videoIcon,
        image:videoProduction,
    },
     {
        name:"Web Design and Development",
        description:"Transform ideas into seamless digital experiences that drive results.",
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