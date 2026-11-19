
import { useEffect, useRef, useState } from "react";
import "../Statistics/statistics.css";
const stats = [
   {
        number: 7,
        name: "Years of Experience"
    },
    {
        number: 500,
        name: "Projects Successfully Delivered"
    },
    {
        number: 200,
        name: "Happy Brands & Clients"
    },
    {
        number: 100,
        name: "Creative Campaigns"
    }
]

const Statistics = ()=>{

    return(
        <>
            <div className="container" id="statistics">
                <div className="innerContainer statisticsInnerContainer">
                    <div className="impact">
                        <h2 className="impactTitle">
                            Our impact
                        </h2>
                        <div className="impactTagline">Numbers That Speak</div>
                    </div>
                    <div className="statisticsContainer">
                    {
                        stats.map((stat,index)=>{
                        return(
                            <div className="singleStat" key={index}>
                                <div className="statNumber">{stat.number}+</div>
                                <div className="statName">{stat.name}</div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Statistics;