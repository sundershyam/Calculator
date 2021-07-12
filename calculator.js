function keypress(classname,inputid){
   var clic = document.getElementsByClassName(classname);
for(i=0;i<clic.length;i++){

   clic[i].addEventListener("click",function(){
      var key = this.innerText;
      var input = document.getElementById(inputid);
      if(input.innerText.length<5){
         if(key=="0"){
            if(input.innerText.length==0){
               input.innerText="";
              
            }
            else{
               input.innerText+=key;
            }
         }
         else{
           if(input.innerText.includes(".") && key=="."){
           }
           else{
            input.innerText+=key;
           }
         }
      }

   });
}
}


function selectoperator(classname,inputid){
   var Element = document.getElementByClassName(classname);

}

function makeeqa(){
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input1");
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input2");
   // selectoperator("c-p-k-o-b-operator","cal-screen-display-operator");
   // var input1 = document.getElementById("cal-screen-display-input1");
   // var input2 = document.getElementById("cal-screen-display-input2");
   // var operator = document.getElementById("cal-screen-display-operator");
   
   
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