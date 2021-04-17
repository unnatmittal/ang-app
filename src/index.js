import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import App2 from "./components/App2";
import App3 from "./components/App3";
import Approute from "./components/routing/Approute";


function Card(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>

    <Approute />

    {/* <App /> */}
    {/* <Card 
      name="beyonce" 
      img="https://www.pexels.com/photo/city-fashion-man-people-3054861/"
      tel="123456789"
      email="beyonce@cyz.com"
    />
    <Card 
      name="unnat" 
      img="https://www.pexels.com/photo/city-fashion-man-people-3054861/"
      tel="9968967738"
      email="unnat@gmail.com"
    /> */}
  </div>,
  document.getElementById('root')
);
