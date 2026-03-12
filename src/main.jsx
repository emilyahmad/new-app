import {createRoot, useState} from 'react-dom/client'

// import { name, age } from "./person.js"; // destructure
// import message from "./message.js";
import Header from './Vehicle.jsx';

// class Car extends React.Component {
//   render() {
//     return <h2>imma car</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>who lives in mi garage</h1>
//         <Car />
//       </div>
//     )
//   }
// }

// createRoot() defines HTML element & displays
// render() what is renmdered in HTML container
// result displayed in root element
createRoot(document.getElementById('root')).render(
  <Header/>
);