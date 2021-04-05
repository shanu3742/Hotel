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

let y=1;
function button3(){
    if(y<20){
    y=y+1;
    let z =Math.floor(y/5)+1;
    document.getElementById("one").innerHTML=z;
    
    }
    document.getElementById("one1").innerHTML=y;
    return y;
    
}

function button4(){
    if(y>1){
     y=y-1;
     let z =Math.floor(y/5)+1;
    document.getElementById("one").innerHTML=z;
    }
    document.getElementById("one1").innerHTML=y;
    return y;
    
}


let children =0;
function button5(){

    if(children<15){
        children=children+1
        let a= children+button3()
        console.log(a)
        document.getElementById("one3").innerHTML=children;
    }

}
function button6(){
    if(children>0){
        children=children-1
        let a= children-button4()
        console.log(a)
        document.getElementById("one3").innerHTML=children;
    }
}



function Room(){
    return (
        <div className="div">
        <div>
        <p className="p">
        <span  className="fa fa-bed  bed">
          <span className="rooms">ROOMS</span></span>
          <span id="span" onClick={button2} className=" minus   circle">- </span>
         
         <span onClick={button1} className=" add   circle">+</span>
         <span  id="one" className="one">{1}</span>
         
         
        
         
         </p>
     
         </div>

<hr className="hr" />


        <div>
        <p className="p">
        <span  className="fa fa-user  bed1">
          <span  className="rooms">ADULTS</span></span>
          <span onClick={button4} className=" minus   circle1">- </span>
          <span onClick={button3} className=" add   circle1">+</span>
          <span id="one1" className="one1">{1}</span>
          
         </p>
     
         </div>

         <hr className="hr1" />

         <div>
        <p className="p">
        <span  className="fa fa-child  bed3">
          <span className="rooms">CHILDREN</span></span>
          <span onClick={button6}  className=" minus   circle3">- </span>
          <span onClick={button5} className=" add   circle3">+</span>
          <span id="one3" className="one3">{0}</span>
          </p>
          </div>
          <hr className="hr2" />
</div>
    )
}
export default Room;