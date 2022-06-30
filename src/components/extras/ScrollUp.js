import { useState,useEffect } from "react";
import {AiOutlineArrowUp} from "react-icons/ai";
import "./ScrollUp.css";

function ScrollUp() {
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>150){
          setVisible(true);
        }else{
          setVisible(false)
        }
    })
  })
  return (
    <AiOutlineArrowUp style={{display:visible?"block":"none"}} className="arrow-up" onClick={()=>{window.scrollTo(0,0)}}/>
  )
}

export default ScrollUp