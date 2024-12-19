import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// Class Component
class About extends Component {
  constructor(props) {
    super(props);

    //Local State Variable
    this.state = {};

    //console.log("Parent Constructor");
  }

  async componentDidMount() {
    // Use to make API calls  
    //console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        {/* <User name={"Udeni Bandara"}/> */}

        <UserClass name={"First"} />
        {/* <UserClass name={"Seconds"} /> */}
      </div>
    );
  }
}

/*

Multiple component life cycle

- Parent Constructor
- Parent Render

    -First Constructor
    -First Render

    -Second Constructor
    -Second Render

    < UPDATED - In SINGEL BATCH >

    -First componentDidMount
    -Second componentDidMout

-Parent componentDidMount


*/

export default About;
