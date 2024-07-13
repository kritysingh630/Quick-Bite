const User = (props)=>{
    return (
        <div className="user-card">
          <h2>Name : {props.name}</h2>
          <h3>Location : Odisha</h3>
          <h4>Contact : +91-123-4567-890</h4>
        </div>
    )
}

export default User;