import "../Services/serviceCard.css";
const ServiceCard = ({id,serviceName,description})=>{
    return(
        <>  
                <div className="card">
                    <div className="serviceContent">
                        <div className="serviceTitleContainer">
                            <span className="index">{id}</span>
                            <div className="serviceName">{serviceName}</div>
                            <div className="serviceTagline">{description}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff510a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right preview-icon"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                        </div>
                        
                        
                    </div>
                </div>
            
        </>
    )
}
export default ServiceCard;