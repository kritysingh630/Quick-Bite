import UserClass from "./userClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a food ordering App</h2>
        {/* <User name={"Krity Kumari (function)"}/> */}
        <UserClass
          name={"Krity Kumari "}
          location={"Odisha"}
          contact={"+91-123-4567-890"}
        />
      </div>
    );
  }
}

export default About;
