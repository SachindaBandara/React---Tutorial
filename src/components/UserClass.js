import React from "react";

class UserClass extends React.Component {
  // most important
  constructor(props) {
    // required super()
    super(props);

    // All State Variable in Class component
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: {
        name: "Default Name",
        location: "Default Location",
        avatar_url: "https://avatar_url",
      },
    };

    //console.log(props);
  }

  async componentDidMount() {
    //console.log("Child Component did mount");

    // Use to make API calls
    const data = await fetch("https://api.github.com/users/SachindaBandara");
    const json = await data.json();

    // Update Local State Variable
    this.setState({
      userInfo: json,
    });

    console.log(json);

    this.timer = setInterval(() => {
      console.log("Namste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  // Removing from the UI
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    // Destructering Props
    //const { name, location, contact} = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            // Never Update State variable Directly
            this.setState({
              // setState update only passed values
              count: this.state.count + 1,
            });
          }}
        >
          Count increased
        </button> */}
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name : {this.state.userInfo.name}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h3>contact : @sachinda99</h3>
      </div>
    );
  }
}

export default UserClass;
