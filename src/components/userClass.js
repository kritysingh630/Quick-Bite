import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
        count: 0,
    }
    console.log(this.props.name+"Child Constructor")
  }

  componentDidMount(){
    console.log(this.props.name+"Child component did Mount")
  }

  render() {
    const {name,location,contact}=this.props;
    const {count} = this.state
    console.log(this.props.name+"Child render")
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={()=>{
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
                count: this.state.count+1
            })
        }}>Increment</button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
