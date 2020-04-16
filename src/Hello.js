import React from "react";
import "./Hello.css";

// class Hello extends React.Component {
//   render() {
//     return (
//       <div className="f1 tc">
//         <h1>Hello World</h1>
//         <p>Testing</p>
//         <p>{this.props.greetings}</p>
//       </div>
//     );
//   }
// }

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World</h1>
      <p>Testing</p>
      <p>{props.greetings}</p>
    </div>
  );
};

export default Hello;
