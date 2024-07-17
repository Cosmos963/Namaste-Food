import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
      count1: 1,
      count2: 2,
    };
  }

  async componentDidMount() {
    // API call

    const data = await fetch("https://api.github.com/users/cosmos963");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count1 != prevState.count ||
      this.state.count1 != prevState.count
    ) {
    }

    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    // const { name, location } = this.props;
    const { count1, count2 } = this.state;

    const { name, location, avatar_url } = this?.state?.userInfo;
    // debugger;

    return (
      <div style={{ padding: "10px", border: "1px solid black" }}>
        {/* <h1>Count1 : {count1}</h1>
        <button
          onClick={() => {
            this.setState({ count1: count1 + 1 });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2 : {count2}</h1> */}

        <img img={avatar_url} />
        <div>Name : {name}</div>
        <div>Location : {location}</div>
        <div>Contact : @akshaymarch7</div>
      </div>
    );
  }
}

export default UserClass;
