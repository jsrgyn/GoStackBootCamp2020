import React from "react";

// export default function Header() {
// export default function Header(props) {
// export default function Header({ title }) {
// export default function Header({ title, children }) {
export default function Header({ title }) {
  return (
    <header>
      {/* <h1>ReactJS</h1> */}
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
      {/*{children} */}
    </header>
  );
}
