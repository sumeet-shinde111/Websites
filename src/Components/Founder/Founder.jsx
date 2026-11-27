import "../Founder/founder.css";
import founderImage from "/images/founder/founder.jpg";

const Founder = ()=>{
    return(
        <>
            <div className="container" id="founder">
                <div className="innerContainer founderContainer">
                    <div className="textContent">
                        <div className="founderTagLine">
                            The Man Behind Garuda Brandworks<span className="dot">.</span>
                            </div>
                        <div className="text">
                            My journey in design began in 2019 with a clear conviction:
                            every business has a distinct story, and it deserves to be told
                            with clarity and strength. Over the past 7+ years,
                            that conviction has grown into Garuda Brandworks.
                        </div>
                        <div className="text">
                            Combining formal training in Advance Communication Design
                            with hands-on execution across branding,
                            packaging and digital advertising. I partner directly with
                            founders to turn raw ideas into cohesive,
                            scalable brands rather than chasing fleeting trends.
                            I focus on building strategic visual systems that earn trust,
                            command attention and stand the test of time.
                        </div>
                        <div className="text closing">
                            <span className="founderName">Chetan Gade,</span>
                            <span>Founder & Creative Director</span>
                        </div>
                    </div>
                    <img src={founderImage} alt="founder image" className="founderImage"/>
                </div>
            </div>
        </>
    )
}
export default Founder;