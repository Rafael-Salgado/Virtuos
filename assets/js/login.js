function loginData(){
  let user = document.getElementById('loginemail').value;
  let pass = document.getElementById('loginpass1').value;
  let data = user+pass;
  var tk = localStorage.getItem("sessionToken");
var bytes = CryptoJS.AES.decrypt(tk, "codingatthedisco");
var originalText = bytes.toString(CryptoJS.enc.Utf8);
if(data==originalText)
{
  document.getElementById('loginVal').innerHTML = "Login exitoso!";
}
else{
  document.getElementById('loginVal').innerHTML = "Usuario y/o Contraseña inválidos.";
}
}
function verificarDatos(){
  //verificar que todos los datos estén correctos
  let isValid = false;

  let alert = document.getElementById('regisAlert');

  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let pass1 = document.getElementById('pass1').value;
  let pass2 = document.getElementById('pass2').value;
  let token = email+pass1;
  let cipherText = CryptoJS.AES.encrypt(token, "codingatthedisco").toString();
  localStorage.setItem("sessionToken",cipherText);
  nombre = nombre.trim();
  if (!(/^[a-zA-Z\s]+$/.test(nombre))){
    alert.innerHTML = "Nombre invalido (a-z, A-Z)";
    alert.hidden = false;
  } else {
      apellidos = apellidos.trim();
      if (!(/^[a-zA-Z\s]+$/.test(apellidos))){
        alert.innerHTML = "Apellido invalido (a-z, A-Z)";
        alert.hidden = false;
      } else {
        phone = phone.trim();
        if (!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))){
          alert.innerHTML = "Telefono invalido";
          alert.hidden = false;
        } else {
          if (pass1 != null && pass1.length < 8){
            alert.innerHTML = "Contraseña invalida, debe contener mínimo 8 caracteres";
            alert.hidden = false;
          } else {
            if (pass1 !== pass2){
              alert.innerHTML = "Contraseñas no coinciden";
              alert.hidden = false;
            } else {
              alert.hidden = false;
              alert.classList.remove('alert-danger');
              alert.classList.add('alert-success')
              alert.innerHTML = "Tus datos fueron enviados!";
              register();
              clearData();
              //crear objeto y pasarlo a login(objeto)
            }
          }
        }
      }
  }
}

function register (){
  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let pass1 = document.getElementById('pass1').value;
  let pass2 = document.getElementById('pass2').value;
  const usuario ={
    usuarioNombre: nombre,
    usuarioApellido: apellidos,
    usuarioEmail: email,
    usuarioPhone: phone,
    usuarioPass1: pass1
  };
}

function clearData(){
  let nombre = document.getElementById('nombre').value = "";
  let apellidos = document.getElementById('apellidos').value = "";
  let email = document.getElementById('email').value = "";
  let phone = document.getElementById('phone').value = "";
  let pass1 = document.getElementById('pass1').value = "";
  let pass2 = document.getElementById('pass2').value = "";
}


  