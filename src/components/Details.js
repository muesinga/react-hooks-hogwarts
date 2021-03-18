import React from "react";


function Details ({name, specialty, greased, weight, medal}) {
    return (
    <div>
    <h3>{name}</h3>
    <h4>{specialty}</h4>
    <h4>{greased}</h4>
    <h4>{weight}</h4>
    <h4>{medal}</h4>
    </div>
    )}
export default Details;