import UserClass from "./userClass";
import User from "./User";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent component did Mount")
    }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a food ordering App</h2>
        {/* <User name={"Krity Kumari (function)"}/> */}
        <UserClass
          name={"First "}
          location={"Odisha (class)"}
          contact={"+91-123-4567-890 (class)"}
        />
        <UserClass
          name={"Second "}
          location={"Odisha (class)"}
          contact={"+91-123-4567-890 (class)"}
        />
      </div>
    );
  }
}

export default About;
