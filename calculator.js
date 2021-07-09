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
   var clic = document.getElementByClassName(classname);
   alert(clic);
for(i=0;i<clic.length;i++){
   clic[i].addEventListener("click",function(){
      var index = this.innerText;
      // var input =document.getElementById(inputid);
      // var input2 =document.getElementById("cal-screen-display-input2");
      // if(input.innerHTML.length<=1){
      //    input.innerHTML=index;
      // }   
      alert(document.getElementById("cal-screen-display-input1").innerText); 
   });
}
}


function makeeqa(){
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input1");
   // keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input2");
   // selectoperator("c-p-k-o-b-operator","cal-screen-display-operator");
   var input1 = document.getElementById("cal-screen-display-input1");
   var input2 = document.getElementById("cal-screen-display-input2");
   var operator = document.getElementById("cal-screen-display-operator");
   if(operator.innerText.length==0){
      keypress("cal-pannel-keyboard-pannel-buttons","cal-screen-display-input1");
   } 
  if(input1.innerText.length>0){
   selectoperator("c-p-k-o-b-operator","cal-screen-display-operator");
   alert("Functioncalled")
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