// export const name = "Tobias"
// export const age = 18

// export {name, age}

// // template strings
// const name = "John";
// const age = 30;
// const message = `Hello, ${name}!
// You are ${age} years old.`;

// const items = ["ap", "ban", "orange"]
// const list = `You have $[items.length] items:
// ${items.map(item => `- ${item}`).join('\n')}`;

// function highlight(strings, fname) {
//     let x = fname.toUpperCase();
//     return strings[0] + x + strings[1];
// }

// let name0 = "John";
// let text = highlight`Hello ${name0}, how are you?`;

// function higlight(strings, fname1, fname2) {
//     let x = fname1.toUpperCase();
//     let y = fname2.toUpperCase();
//     return strings[0] + x + strings[1] + y + strings[2];
// }

// let name1 = "Johnny";
// let name1 = "Jane";

// let text1 = highlight`Hello ${name1} and ${name2}, how are you?`;

// function Car({color = "blue", brand}) {
//     return (
//         <h2>my {color} {brand}</h2>
//     );
// }

// const carInfo = ["Ford", "Mustang"];

// createRoot(document.getElementById('root')).render(
//     <Car brand="Ford"/>
// );

// function Son(props) {
//     return (
//         <div style={{background: 'lightgreen'}}>
//             <h2>Son</h2>
//             <div>{props.children}</div>
//         </div>
//     );
// }

// function Daughter(props) {
//     const {brand, model} = props;
//     return (
//         <div style={{brackground: 'lightblue'}}>
//             <h2>Daughter</h2>
//             <div>{props.children}</div>
//         </div>
//     );
// }

// function Parent() {
//     return (
//         <div>
//             <h1>my 2 kiddos</h1>
//             <Son>
//                 <p>
//                     this was written in parent component,
//                     displayed as part of son component

//                 </p>
//             </Son>
//             <Daughter>
//                 <p>
//                     written in parent component,
//                     displayed in daughter component
//                 </p>
//             </Daughter>
//         </div>
//     );
// }

// createRoot(document.getElementById('root')).render(
//     <Parent />
// );