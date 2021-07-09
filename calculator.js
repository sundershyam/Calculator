function keypress(classname,inputid){
   var clic = document.getElementsByClassName(classname);
for(i=0;i<clic.length;i++){
   const showindex = document.createElement("h1");
   showindex.innerHTML=i;

   clic[i].addEventListener("click",function(){
      const index = showindex.innerHTML;
      var input1 =document.getElementById(inputid);
      if(input1.innerHTML.length<5){
         input1.innerHTML+=index;
      }
   });
}
}


function selectopeartor(classname,inputid){
   var clic = document.getElementsByClassName(classname);
   var checko="23";
for(i=0;i<clic.length;i++){
   const showindex = document.createElement("h1");
   showindex.innerHTML=i;

   clic[i].addEventListener("click",function(){
      const index = showindex.innerHTML;
      var input =document.getElementById(inputid);
      var input2 =document.getElementById("cal-screen-display-input2");
      if(input2.innerHTML.length==0 && input.innerHTML.length<=1){
         input.innerHTML=this.innerHTML;
      }    
   });
}
}

function makeeqa(){
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input1");
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input2");
   // selectopeartor("c-p-k-o-b-operator","cal-screen-display-operator");
   var input1 = document.getElementById("cal-screen-display-input1");
   var input2 = document.getElementById("cal-screen-display-input2");
   var operator = document.getElementById("cal-screen-display-operator");
   if(input2.innerText.length==0 && operator.innerText.length==0){
      keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input1");
   }
  

}

makeeqa();



function clearscreen(){
   document.getElementById("cal-screen-display-input1").innerText="";
   document.getElementById("cal-screen-display-input2").innerText="";
   document.getElementById("cal-screen-display-operator").innerText="";
   document.getElementById("cal-screen-display-Result").innerText="0";
   
}
// if(input1.innerHTML.length>0){
//    selectopeartor("c-p-k-o-b-operator","cal-screen-display-operator");
// }
// if(input1.innerHTML.length>0 && operator.innerHTML.length==1){
//    keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input2");
// }