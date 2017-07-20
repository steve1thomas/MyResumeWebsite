/* ================================= 
  JScript Elements refresh 
==================================== */
const form = document.getElementByID('registrar');
const input = form.querySelector('input');
form.addEventListener('submit',(e) = > {
  console.log(input.value);});
const text=input.value;
input.value="";
});
