import { useEffect, useState } from "react";

const User = (props) => {
  //create state variable
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API call

    const timer = setInterval(() => {
      console.log("Namste React");
    }, 1000);

    console.log("useEffect");

    // CleanUp the code( leaving to the another page)
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  console.log("Render");

  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count = {count2}</h2>
      <h3>Name : {props.name}</h3>
      <h3>Location : Balangoda</h3>
      <h3>contact : @sachinda99</h3>
    </div>
  );
};
export default User;
