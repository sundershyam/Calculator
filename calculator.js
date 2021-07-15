function keypress(classname, inputid) {
   var clic = document.getElementsByClassName(classname);
   for (i = 0; i < clic.length; i++) {

      clic[i].addEventListener("click", function () {
         var key = this.innerText;
         var input = document.getElementById(inputid);
         if (input.innerText=="0") {
            input.innerText = key;
         }
         else {
            
               input.innerText += key;
            
         }
      });
   }
}

keypress("keys", "cal-screen-display-input");

function lengthOfArray() {
   const history = localStorage.getItem("history");
  if(history){
      let object = JSON.parse(history);
   let i = 0;
   object.forEach(function (result) {
      i = i + 1;
   });
   return i;
  }
}

function createhistory(inputbyuser, evaluation) {
   var history = localStorage.getItem("history");
      if (history) {
         if (lengthOfArray() < 10){
         const resultshow = document.getElementById("showhistory");
         resultshow.innerHTML+= "<li class='listshow'>" + inputbyuser + " = " + evaluation + "</li>";
         var dataByStorage = JSON.parse(history);
         const store = { Input: inputbyuser, Output: evaluation };
         dataByStorage.push(store);
         localStorage.setItem("history", JSON.stringify(dataByStorage));
         }
         else{
            const resultshow = document.getElementById("showhistory");
            const list = document.getElementsByClassName("listshow");
            list[0].remove();
            resultshow.innerHTML+= "<li class='listshow'>" + inputbyuser + " = " + evaluation + "</li>";
            var dataByStorage = JSON.parse(history);
            dataByStorage.splice(0, 1);
            const store = { Input: inputbyuser, Output: evaluation };
            dataByStorage.push(store);
            localStorage.setItem("history", JSON.stringify(dataByStorage));
         }
      }
      else {
         const resultshow = document.getElementById("showhistory");
         resultshow.innerHTML= "<li class='listshow'>" + inputbyuser + " = " + evaluation + "</li>";
         const store = [{ Input: inputbyuser, Output: evaluation }];
         localStorage.setItem("history", JSON.stringify(store));
   }
}





function clearscreen() {
   document.getElementById("cal-screen-display-input").innerText = "0";
   document.getElementById("cal-screen-display-Result").innerText = "";
}

const history = localStorage.getItem("history");
if(history!=null){
let object = JSON.parse(history);
const resultshow = document.getElementById("showhistory");
object.forEach(function (result) {
   resultshow.innerHTML += "<li class='listshow'>" + result.Input + " = " + result.Output + "</li>";

});
}

function showhistory(){
  document.getElementById("cal-pannel-keyboard-operations").style.display="none";
  document.getElementById("cal-pannel-history").style.display="flex";
}
function reset(){
   document.getElementById("cal-pannel-keyboard-operations").style.display="grid";
   document.getElementById("cal-pannel-history").style.display="none";
}
function historytoinput(){
   const hist = document.getElementsByClassName("listshow");
   for(i=0;i<hist.length;i++){
      hist[i].addEventListener("click",function(){
          var value = this.innerText;
          var input = document.getElementById("cal-screen-display-input");
          input.innerText=value;
      });
   }
}
historytoinput();
function findresult() {
   var input = document.getElementById("cal-screen-display-input");
   var result = document.getElementById("cal-screen-display-Result");
   if (input.innerText.includes("+") || input.innerText.includes("-") || input.innerText.includes("*") || input.innerText.includes("/")) {
      let inputbyuser = input.innerText;
      let evaluation = eval(input.innerText)
      result.innerText = evaluation;
      createhistory(inputbyuser, evaluation);
      input.innerText = '';
      historytoinput();
   }
}