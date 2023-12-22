const inputbox=document.getElementById("input-holder");
const listContainer=document.getElementById("list-conatiner");

function addTask(){
     if(inputbox.value === ''){
        alert("u add something");
     }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }
    
     inputbox.value=" ";
     saveDate();
}

listContainer.addEventListener("click" ,function(e){
      if(e.target.tagName === "LI"){
         e.target.classList.toggle("checked");
         saveDate();
      }
      else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveDate();
      }
},false);


function saveDate(){
   localStorage.setItemItem("data",listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();