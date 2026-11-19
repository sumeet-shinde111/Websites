import "../Services/serviceCard.css";
const ServiceCard = ({serviceName,description,icon})=>{
    return(
        <>  
                <div className="card">
                    {/* <img src = {image} alt="" className="serviceImage"/> */}
                    <div className="serviceContent">
                        <div className="serviceTitleContainer">
                            <img src={icon} alt={serviceName+" "+icon} className="serviceIcon"/>
                            <div className="serviceName">{serviceName}</div>
                        </div>
                        
                        <div className="serviceTagline">{description}</div>
                    </div>
                </div>
            
        </>
    )
}
export default ServiceCard;