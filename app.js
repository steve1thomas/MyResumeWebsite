/* ================================= 
  JScript Element refresh 
==================================== */
const form = document.getElementById('registrar');
const input = form.querySelector('input');
form.addEventListener('submit',(e) => {
   e.preventDefault ();
const text=input.value;
 alert('Thank you for your Name and PhoneNumber, will be in Contact with you!');
  input.value="";
});
