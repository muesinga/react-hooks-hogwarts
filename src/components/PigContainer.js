import React from "react";
import PigCard from "./PigCard"

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
    "Piggy Smalls": piggy_smalls,
    Piglet: piglet,
    Porkchop: porkchop,
    Trouble: trouble,
    "Truffle Shuffle": truffle_shuffle
};


function PigContainer({pigs}) {
     const pigCard = pigs.map((pig) => {
     return <PigCard key={pig.id} 
     id={pig.id} 
     name={pig.name} 
     specialty={pig.specialty} 
     greased={pig.greased}
     weight={pig.weight}
     medal={pig['highest medal achieved']} />
     });
    return (
      <div>
        <h2>Pigs</h2>
        <p>{pigCard}</p>
        <img src={images[pigCard.name]} alt={pigCard.name} />
      </div>
    );
  }

// function PigContainer({ name, specialty, greased, weight, medal }) {
//     return (
        
//     )
// }

export default PigContainer;