import {createRoot, useState} from 'react-dom/client'

// import { name, age } from "./person.js"; // destructure
// import message from "./message.js";
// import Header from './Vehicle.jsx';

// function Football() {
//   // const shoot = () => {
//   //   alert("Great shot!");
//   // }
//   const shoot = (a, b) => {
//     alert(b.type);
//   }

//   return (
//     // <button onClick={shoot}>Take the shot!</button>
//     <button onClick={(event) => shoot("u stupid", event)}>click this if ur stupid</button>
//   );
// }

function MissedGoal() {
  return <h1>damn bro</h1>
}

function MadeGoal() {
  return <h1>yessir</h1>
}

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>
// }

// function Car(props) {
//   return (
//     <>
//     {props.brand && <h1>My car is a {props.brand}!</h1>}
//     </>
//   );

// }

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
    {isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false}/>
);