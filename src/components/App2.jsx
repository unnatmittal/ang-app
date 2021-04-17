import React, { useState } from "react";
import Login from "./Login";

var isLoggedIn = false;

function App2(){
    return (
        <div>{
            isLoggedIn ? <h1>Hello</h1> : <Login />
        }</div>
    );
}

function App3(){
    
    const [count, setCount]=React.useState(0);

    function increase(){
        setCount(count+1);
    }

    function decrease(){
        setCount(count-1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

function App4(){

    //const [headingText, setHeadingText]=React.useState("Hello");
    const [isMouseOver, setMouseOver]=React.useState(false);

    // function handleClick(){
    //     setHeadingText("Submitted");
    // }

    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    const [name, setName]=React.useState("");
    const [headingText, setHeadingText]=React.useState("");


    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick(){
        setHeadingText(name);
    }

    return (
        <div>
            <h1>Hello, {headingText}</h1>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder="Whats ur name?"
                value={name}
                />
            <button 
                style={{backgroundColor: isMouseOver ? "blue" : "white"}} 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
            Submit</button>
        </div>
    )
}

