import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [list, setList] = useState([]);
   
  //Example of asyync in callback function

//   useEffect(async () =>{
//     console.log("callBack functio")
//     // const timer =  setInterval(() =>{
//     //       console.log(" useEfeect  - setInternVal -contact")
//     //     },1000)
//       //this return will cleanup the function
//         return() =>{
//          // clearInterval(timer);
//         }
//  },[])

//   async function asyncFunction(){
//     return "async funtion testing"
//   }
  const api = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() =>{
    getApiDataByUsingFetchWithoutThen();
    getApiDataByUsingFetchWithThen();
    getApiDataByUsingAxios();
    // console.log("asyncFunction" ,asyncFunction());
    // //Using async and await
  },[]);
  async function getApiDataByUsingFetchWithoutThen(){
    const fetchData = await fetch(api,{
      method:'GET' // default, so we can ignore
      //Or, we can simply ignore the optional parameter because GET is the default
    });
    const data = await fetchData.json();
    setList(data)
  }
 function getApiDataByUsingFetchWithThen(){
    fetch(api)
    .then((response) => response.json())  //This operation returns a promise that could either resolve or reject.
    //If it resolves, we handle the response using .then(). But at this stage, the returned data is a Response object,
    // which is not the actual format that we need, although it is useful to check for the HTTP status and to handle errors.

    //Next, we must resolve the Response object to JSON format using the json() method.
    // This also returns a promise and from there, we can resolve to get the actual data that we need:
    .then((data) =>{
    })
    .catch((err) =>console.log("error",err.message))
  }
  function getApiDataByUsingAxios(){
    //There is a difference between these two as in fetch() we have to convert the result to a JSON object but in Axios
    // it already returns the result as a JSON object, so we don’t need to convert it.

   return axios.get(api).then((res) =>res.data)
  }
  return (
    <div>
      <h1>Contact Us</h1>
      {list.map((items) =>{
      return <p key={items.id}>{items.title}</p>
      })}
    </div>
  );
};
export default Contact;
