import React from "react";
import PigCard from "./PigCard"



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
        {/* <img src={images[pigCard.name]} alt={pigCard.name} /> 
        <h1>Random</h1> */}
      </div>
    );
  }

export default PigContainer;