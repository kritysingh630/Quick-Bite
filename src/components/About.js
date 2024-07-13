import UserClass from "./userClass";
import User from "./User";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is a food ordering App</h2>
            <User name={"Krity Kumari (function)"}/>
            <UserClass name={"Krity Kumari (Class)"} location={"Odisha (class)"} contact={"+91-123-4567-890 (class)"}/>
        </div>
    )
}

export default About;
