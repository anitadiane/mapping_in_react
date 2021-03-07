import React from 'react';
import Character from "./Character";

function Card() {

    const [Array] = React.useState([
        {
            name: 'Cinder',
            power: 'fire',
            color: 'orange',
            age: 28,
            moves: ["Trailblazer", "Inferno", "Fire Flash"]
        },
        {
            name: 'Aganos',
            power: 'rock',
            color: '#009999',
            age: 900000,
            moves: ["Payload Assault", "Pulverize", "Ruin"]
        },
        {
            name: 'Jago',
            power: 'Tiger Spirit',
            color: '#336699',
            age: 25,
            moves: ["Edokuken", "Tiger Fury", "Wind Kick"]
        }
    ])

    const arrayList = Array.map((pl,idx)=>
        <Character name={pl.name} power={pl.power} age={pl.age} color={pl.color} moves={pl.moves} key={idx}/>
    );

    return (
        <div>
            <ul>
                <li>{arrayList}</li>
            </ul>

        </div>
    )}
export default Card;