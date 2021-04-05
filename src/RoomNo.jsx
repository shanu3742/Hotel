import React from "react"
let x=1;


function button1(){
    if(x<5){
    x=x+1;
    
    }
document.getElementById("one").innerHTML=x;
}
function button2(){
    if(x>1){
    x=x-1;
    }
    document.getElementById("one").innerHTML=x;

}

    





function RoomNo(){
    return (
        <div>
        <p className="p">
        <span  className="fa fa-bed  bed">
          <span className="rooms">ROOMS</span></span>
          <span id="span" onClick={button2} className=" minus   circle">- </span>
         
         <span onClick={button1} className=" add   circle">+</span>
         <span  id="one" className="one">{1}</span>
         
         
        
         
         </p>
     
         </div>
    )
}
export default RoomNo;