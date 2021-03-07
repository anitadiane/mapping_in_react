import React from "react";
import Character from "./Character";

function Mine() {
    const [Mine] = React.useState([{
        name: 'Anita',
        power: 'none',
        color: 'purple',
        age: 23,
        moves: ["Crawl", "Speed Walk"]
    },
        {
            name: 'Monkey',
            power: 'Loud Noise',
            color: 'yellow',
            age: 18,
            moves: ["Swinging", "Climbing"]
        },
        {
            name: 'Panda',
            power: 'Strong Jaws',
            color: 'lightblue',
            age: 300,
            moves: ["Eating", "Falling"]
        }
    ])
    const myList = Mine.map((pl,idx)=>
        <Character name={pl.name} power={pl.power} age={pl.age} color={pl.color} moves={pl.moves} key={idx}/>
    );


    return (
        <div>
            <ul>
                <li>{myList}</li>
            </ul>
        </div>
    )
}
    export default Mine;