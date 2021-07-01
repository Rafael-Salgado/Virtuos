
function verificarPasswords (){
// Obtenemos los valores de los campos de contraseñas 
let p1 = document.getElementById('pass1').value;
let p2 = document.getElementById('pass2').value;

// Verificamos si las constraseñas no coinciden 
if (p1 != p2) {
  alert("Las passwords deben de coincidir");
  return false;
} else {
  alert("Todo esta correcto");
  return true; 
}}
