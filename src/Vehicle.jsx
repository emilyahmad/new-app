// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {favoritecolor: "red"};
//     }

//     static getDerivedStateFromProps(props, state) {
//         return {favoritecolor: props.favcol};
//     }
//     render() {
//         return (
//             <h1>My fav color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// createRoot(document.getElementById('root')).render(
//     <Header favcol="yellow"/>
// );

// // /* function Car() {
// //     return (
// //         <h2>yooo imma car</h2>
// //     );
// // }

// // export default Car; */

// // // using classes
// // import React from 'react';
// // class Car extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             brand: "Ford",
// //             model: "Mustang",
// //             color: "red",
// //             year: 1964
// //         };
// //     }

// //     changeColor = () => {
// //         this.setState({color: "blue"});
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <h1>My {this.state.brand}</h1>
// //                 <p>
// //                     is {this.state.color}
// //                     {this.state.model}
// //                     from {this.state.year}.
// //                 </p>
// //                 <button
// //                 type="button"
// //                 onClick={this.changeColor}>Change color</button>
// //             </div>
// //         );
// //     }
// // }

// export default Car;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favoritecolor;
  }
  
  shouldComponentUpdate() {
    document.getElementById("div2").innerHTML = "The updated favorite is " + this.state.favoritecolor;
  }

    render() {
        return (
            <div>
                <h1>My fav color is {this.state.favoritecolor}</h1>
                {/* <button type="button" onClick={this.changeColor}>Change color</button> */}
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}


createRoot(document.getElementById('root')).render(
  <Header />
);

