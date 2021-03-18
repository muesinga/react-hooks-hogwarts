import React, {useState} from "react";
import Details from "./Details"

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
    "Augustus Gloop": augustus_gloop,
    Babe: babe,
    Bailey: bailey,
    Cherub: cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    Peppa: peppa,
    "Piggy smalls": piggy_smalls,
    Piglet: piglet,
    Porkchop: porkchop,
    Trouble: trouble,
    "Truffle Shuffle": truffle_shuffle
};

function PigCard({name, specialty, greased, weight, medal}) {
    const [showDetails, setShowDetails] = useState(true)
    function pigDetails({
        return <Details name={name} specialty={specialty} greased={greased} weight={weight} medal={medal} />
    })
    function handleShowDetails() {
        setShowDetails(!showDetails);
        console.log(showDetails)
    }
    
    return (
        
        <div>
        <h1>{name}</h1>
        <img src={images[name]} alt={name} />
        <button onClick={handleShowDetails}> Show Details</button>
        {handleShowDetails ? null : pigDetails}
        </div>
    )
}

export default PigCard;