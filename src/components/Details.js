import React from "react";
// import hogs from "../porkers_data";

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
    // {name, specialty, greased, weight, medal}
export default Details;