import ServiceCard from "./ServiceCard";
import "../Services/services.css";



const serviceData =[
    {
        id:'01',
        name:"Social Media Marketing",
        description:"We create scroll-stopping content that captures attention and builds your brand presence.From strategy to engagement, we turn followers into a loyal community.Make your brand impossible to ignore across every social platform.",
    },
     {
        id:'02',
        name:"Influencer Marketing",
        description:"We connect your brand with creators who inspire trust and influence decisions.Through authentic collaborations, we help you reach the right audience.Turn powerful partnerships into meaningful brand growth.",
      
    },
     {
        id:'03',
        name:"Video Production Services",
        description:"We transform your ideas into compelling visual stories that leave a lasting impression.From concept development to the final cut, every frame has a purpose.Bring your brand to life with videos that captivate and connect.",
       
    },
     {
        id:'04',
        name:"Web Design and Development",
        description:"We design visually striking websites that bring your brand's identity to life.Our responsive, high-performance solutions blend creativity with functionality.Turn visitors into customers with digital experiences built to deliver results.",
        
    },
] 
const Services = ()=>{
    return(
        <div className="container" id="services">
        <div className="innerContainer servicesContainer">
            <h2 className="servicesTitle">
                What we do<span className="dot">.</span>
            </h2>
            <div className = "cardContainer">
                {
                    serviceData.map((service,index)=>{
                        return <ServiceCard key = {index} serviceName={service.name} description = {service.description} id={service.id}/>
                    })
                }
            </div>

        </div>
        </div>
    )
} 
export default Services;