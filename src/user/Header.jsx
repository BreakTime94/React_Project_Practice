import React from "react";

function Header(props) {
  return (
      <div>{/* Header */}
        <h1><a href={"/"} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
      </div>
  );
}
export default Header