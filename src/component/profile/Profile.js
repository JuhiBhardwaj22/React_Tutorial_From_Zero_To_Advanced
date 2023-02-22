import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  //console.log("before useEffect render");
  useEffect(() => {
  //   console.log("funtion-useEffect");
  // const timer =  setInterval(() =>{
  //     console.log("useEfeect  - setInternVal -profile")
  //   },1000)

  //this return will cleanup the function
  //   return() =>{
  //     clearInterval(timer);
  //   }

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) =>res.json())  //This operation returns a promise that could either resolve or reject.
  .then((data) =>console.log("data",data))
},[]);
  //console.log("After useEffect render");
  return (
    <>
      <h2>Function Component(Profile.js) :-{props.name} </h2>
      <p>Function Count :- {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Profile;
