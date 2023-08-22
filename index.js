let buffer ;
// screen = document.getElementById("screen");
buffer = document.getElementById("buffer");
res = document.getElementById("res");
const display = (value) =>{
 
    buffer.innerHTML = value;
 
}

document.querySelectorAll(".data").forEach((Element)=>{
    Element.addEventListener("click",()=>{
        display(Element.innerHTML);
    })
})
document.addEventListener("keydown",(e)=>{
    buffer.innerHTML = e.key;
})