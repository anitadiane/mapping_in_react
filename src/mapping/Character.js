import React from "react";

function Character(props) {
    const [name]=React.useState(props.name);
    const [age]=React.useState(props.age);
    const [power]=React.useState(props.power);
    const [color]=React.useState(props.color);
    const [moves]=React.useState(props.moves);

    const [button, setButton] = React.useState("");

    return (
        <div className={Character} style={{backgroundColor: color, minHeight: "100px", maxWidth:"200px"}}
        onClick={()=>setButton(true)}>
            <h1>Name: {name}</h1>
            <h2>Superpower: {power}</h2>
            <h2>Age: {props.age > 50 ? "I am too old" : props.age}</h2>
            <h2>Special Moves: {moves}</h2>
            {button===true?<h3>My power is: {power}</h3>: <h3></h3>}

        </div>

    )
}

export default Character;
