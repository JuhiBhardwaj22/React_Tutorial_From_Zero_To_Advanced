import React, { useState } from "react";
import  "../../../ScssExample.scss"

const Section = ({title,discription,isVisible,setIsVisible}) => {
  
  return(
    <div className="border border-black p-2 m-2">
      <h1 className="text-lg font-bold">{title}</h1>
      <button className="border border-black p-1 text-sm bg-blue-600" onClick={() => {
        if(isVisible){
          setIsVisible(false)
        }
        else{
          setIsVisible(true)
        }
      }}>{isVisible ? "Hide" : "Show"}</button>
     {isVisible && <p className="text-sm">{discription}</p>}
    </div>
  )

}

const Offers = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  return (
    <div>
      <h1 className="text-2xl font-b p-2">Offers</h1>
      <Section 
      title={"About Offers"} 
      isVisible ={sectionConfig === "about"} 
      setIsVisible = {() =>{
        sectionConfig === "about" ? setSectionConfig("") : setSectionConfig("about")
      }} 
      discription={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"}/>
      <Section 
      title={"Team Offers"} 
      isVisible ={sectionConfig === "team"} 
      setIsVisible = {() =>{
        sectionConfig === "team" ? setSectionConfig("") : setSectionConfig("team")
      }} 
       discription={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"}/>
      <Section 
      title={"Menu Offers"}  
      isVisible ={sectionConfig === "menu"} 
      setIsVisible = {() =>{
        sectionConfig === "menu" ? setSectionConfig("") : setSectionConfig("menu")
      }} 
      discription={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"}/>
    </div>
  );
};

export default Offers;
