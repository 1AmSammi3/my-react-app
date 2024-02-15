import React from "react"
import "./Card.css"
import "./Data.js"

export default function Card() {
    
    return(
        <>
            <div className="poster">
               <img src ="src/assets/images/webimage1.png" className="posterImage"/>
               <div className="infoFlex">
                    <p>Movie Name:</p>
                    <p>Stuff</p>
               </div>
            </div>
        </>
    )
}