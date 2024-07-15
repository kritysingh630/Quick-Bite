import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kritysingh630");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("component will unmount")
  }

  render() {
    const { name, location,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="profile-img" src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @kritysingh630</h4>
      </div>
    );
  }
}

export default UserClass;
