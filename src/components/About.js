import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>

        <User name="Akshay Saini (Class)" location="Dehradun (Class)" />
        {/* <UserClass name="Akshay Saini (Class)" location="Dehradun (Class)" /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name="Akshay Saini (Function)" location="Dehradun (Function)" />

//       <UserClass name="Akshay Saini (Class)" location="Dehradun (Class)" />
//     </div>
//   );
// };

export default About;
