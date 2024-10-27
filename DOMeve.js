/*let btn=document.querySelector("button");
console.dir(btn);*/

/*btn.onclick = function() {
    alert("Console was clicked");
}*/
/*function sayHello(){
    alert("Hello");
}*/
/*let btn=document.querySelector("button");
btn.addEventListener("click",function(){
console.dir(this);
});*/
let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
/*btn.addEventListener("click",function()
{
   console.dir(this.innerHTML);
   this.style.backgroundColor="blue";
});

p.addEventListener("click",function()
{
   console.dir(this.innerHTML);
   this.style.backgroundColor="blue";
});

h1.addEventListener("click",function()
{
   console.dir(this.innerHTML);
   this.style.backgroundColor="blue";
});

h2.addEventListener("click",function()
{
   console.dir(this.innerHTML);
   this.style.backgroundColor="blue";
});

p.addEventListener("click",function()
{
   console.dir(this.innerHTML);
   this.style.backgroundColor="blue";
});*/

/*btn.addEventListener("click",thisun);
h1.addEventListener("click",thisun);
h2.addEventListener("click",thisun);
p.addEventListener("click",thisun);

function thisun(){
  console.dir(this.innerHTML);
  this.style.backgroundColor="blue";

}*/
/*let inp=document.querySelector("input");
inp.addEventListener("keyup",function(event){
  console.log(event.key);
  console.log(event.code);
  console.log("Key was pressed");
});*/
/*let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event)
{
    console.log(`Eventcode:${event.code}`);
    if(event.code=="KeyU")
    {
        console.log("Arrow is moved upwards");
    }
    else if(event.code=="KeyD")
    {
        console.log("Arrow is moved downwards");
    }
    else if(event.code=="KeyR")
    {
        console.log("Arrow is moved towards right");
    }
    else if(event.code=="KeyL")
    {
        console.log("Arrow is moved towards left");
    }
});*/
/*let frm=document.querySelector("form");
frm.addEventListener("submit",function(){
    console.log("form was submitted");
    alert("Form was submitted");
});*/
/*let frm=document.querySelector("form");
frm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(event);
});*/
/*let frm=document.querySelector("form");
let user=document.querySelector("#user");
let pass=document.querySelector("#pass");
frm.addEventListener("submit",function(event){
event.preventDefault();
console.log(user.innerText);
console.log(pass.innerText);
});*/
/*let frm=document.querySelector("form");
let user=document.querySelector("#user");
let pass=document.querySelector("#pass");
frm.addEventListener("submit",function(event){
event.preventDefault();
console.log(user.value);
console.log(pass.value);
});*/
/*let frm=document.querySelector("form");
console.dir(frm);
frm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(this.elements[0].value); //form.elements[0];
    console.log(this.elements[1].value);
});*/
/*let form=document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();
});*/
/*let user=document.querySelector("#user");
user.addEventListener("change",function(){
console.log("input changed");
console.log("final value",user.value);
});*/
/*user.addEventListener("input",function(){
console.log("input changed");
console.log("final value is",user.value);
});*/
/*let inp=document.querySelector("#text");
inp.addEventListener("input",function(){
    console.log("Input is changed");
    p.innerText=this.value;
});*/

let inpt = document.querySelector("input");
let h = document.querySelector("p");
inpt.addEventListener("input",function(){
    let username = inpt.value;
h.innerText = username.replace(/[^a-zA-Z\s]/g, '');
})






