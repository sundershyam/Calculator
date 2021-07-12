function keypress(classname,inputid){
   var clic = document.getElementsByClassName(classname);
for(i=0;i<clic.length;i++){

   clic[i].addEventListener("click",function(){
      var key = this.innerText;
      var input = document.getElementById(inputid);
      if(key=="0"&&input.innerText.length==0){

      }
      else{
        if(key=="+" || key=="-" || key=="*" || key=="/"){
         if(input.innerText.includes("+") || input.innerText.includes("-") || input.innerText.includes("+") || input.innerText.includes("/")){
            console.log("yes");
         }
         else{
            input.innerText+=key;
         }
        }
        else{
           input.innerText+=key;
        }
      }
   });
}
}

keypress("keys","cal-screen-display-input");


function findresult(){
   var input = document.getElementById("cal-screen-display-input");
   var result = document.getElementById("cal-screen-display-Result");
   let evaluation = eval(input.innerText)
  result.innerText=evaluation;
  input.innerText='';
}


function clearscreen(){
   document.getElementById("cal-screen-display-input").innerText="";
   document.getElementById("cal-screen-display-Result").innerText="0";
}
