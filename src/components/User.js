import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count1] = useState(1);
  const [count2] = useState(2);

  useEffect(() => {
    // API calls
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    // console.log("useEffect");

    return () => {
      clearInterval(timer);
      // console.log("useEffect return");
    };
  }, []);

  // console.log("render");

  // Warning if written like this👇
  // useEffect(async () => {
  //   return () => {};
  // }, []);

  // Though the answer provided by Emran Quedan is correct, It lacks an explanation, As martin has mentioned in the comment, the root issue is because React’s useEffect hook expects a cleanup function returned from its callback which is called when the component unmounts. Using an async function like

  // useEffect(async () => {}, []);

  // here will cause a bug because when async callback function of the useEffect is called, Promise is returned instead of function. But the rule is that we should either return clean up function or nothing from the callback given to the useEffect,but async function by its property always return Promise which violates this rule. to solve the issue slightly elegant syntax is like

  // If want to write async function in useEffect
  function App() {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://example.com/data");
        const data = await response.json();
        console.log(data);
      }

      fetchData();
    }, []);

    return <div>Hello World</div>;
  }

  // useEffect(() => {
  //   return () => {
  //     // API calls
  //   };
  // }, [count1, count2]);

  // useEffect(() => {
  //   return () => {
  //     // API calls
  //   };
  // }, [count1]);

  // useEffect(() => {
  //   return () => {
  //     // API calls
  //   };
  // }, [count2]);

  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <h1>Count1 : {count1}</h1>
      <h1>Count2 : {count2}</h1>
      <div>Name : {name}</div>
      <div>Location : {location}</div>
      <div>Contact : @akshaymarch7</div>
    </div>
  );
};

export default User;
