let toasts= document.querySelector("#toasts")
let message= document.querySelector("#message-content")
let addbtn = document.querySelector("#add-button")
let removebtn = document.querySelector("#clear-button")
let cancelbtn = document.querySelectorAll(".cancel-button")
let success=document.querySelector("#success")
let cancelable=document.querySelector("#cancelable")
let duration=document.querySelector("#duration")

addbtn.addEventListener('click', add)
function add(){

    let toast =document.createElement("div")
    toast.classList.add("toast")
// create p
    let p= document.createElement("p")
    p.innerText=message.value
    toast.appendChild(p)
//create button
if(cancelable.checked==true){
    let button= document.createElement("button")
   button.innerText="X"
    // remove element
    button.addEventListener('click',()=>{
button.parentElement.remove()
    })
    toast.appendChild(button)
    button.classList.add("cancel-button")
toasts.appendChild(toast) 
}
else{
    console.log("dcx")
    toasts.appendChild(toast) 

}

if(success.checked==true){
    toast.classList.add("success-toast")
    p.classList.add("message")

}
else{
    toast.classList.add("error-toast")
    p.classList.add("message")
}
if(!message.value){
if(success.checked==true){
p.innerText="succsess"
}
else{
    p.innerText="error"
}
}

setTimeout(function(){
   toast.style.display = "none"; 
   if((duration.value<500)||(typeof duration.value === 'string' && duration.value.trim().length === 0))
   {
    duration.value=500
}}, duration.value)




removebtn.addEventListener('click', remove)
function remove(){
    toasts.innerHTML=''
}

}
