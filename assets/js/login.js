function isLogged(){
  var loggeo = localStorage.getItem('isLoggedIn');
  if (loggeo == 1)
  {
    document.getElementById('sesion').innerHTML = "Mi cuenta";
    document.getElementById('sesion').href = "/account";
  }
}
function logout(){
  var loggeo = localStorage.setItem('isLoggedIn', 0);
}


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
  localStorage.setItem('isLoggedIn', 1)
}
else{
  document.getElementById('loginVal').innerHTML = "Usuario y/o Contraseña inválidos.";
  localStorage.setItem('isLoggedIn', 0)
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
  //let cipherText = CryptoJS.AES.encrypt(token, "codingatthedisco").toString();
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
              //register();
              newUser();
             
              //localStorage.setItem("sessionToken",cipherText);
            }
          }
        }
      }
  }
}
function yuser(){
  var iuser = JSON.parse(localStorage.getItem('userName'));
  document.getElementById("misdatos").innerHTML = "Nombre: "+iuser.usuarioNombre+" "+iuser.usuarioApellido+"<br>Email: "+iuser.usuarioEmail+"<br>Telefono: "+iuser.usuarioPhone;
}

function register (){
  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  const usuario ={
    usuarioNombre: nombre,
    usuarioApellido: apellidos,
    usuarioEmail: email,
    usuarioPhone: phone,
  };
localStorage.setItem("userName", JSON.stringify(usuario));
}

function clearData(){
  let nombre = document.getElementById('nombre').value = "";
  let apellidos = document.getElementById('apellidos').value = "";
  let email = document.getElementById('email').value = "";
  let phone = document.getElementById('phone').value = "";
  let pass1 = document.getElementById('pass1').value = "";
  let pass2 = document.getElementById('pass2').value = "";
}


function newUser(){
  const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF')
  let form = document.getElementById("miformulario");
  let name = form.elements["name"].value;
  let lastName = form.elements["last_name"].value;
  let email = form.elements["email"].value;
  let phone = form.elements["phone"].value;
  let pass = form.elements["pass"].value;
  let pass2 = form.elements["pass2"].value;
  let ckey = CryptoJS.enc.Utf8.parse(key)
  let encrypted = CryptoJS.AES.encrypt(pass, ckey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  const user = {
  user_name: name,
  user_lastname: lastName,
  user_email: email,
  user_phone: phone,
  user_password: encrypted.toString(),
};

  fetch("http://localhost:8080/newUser", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
    clearData();
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


}

function loginUserData(){
  const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF')
  let user = document.getElementById('loginemail').value;
  let pass = document.getElementById('loginpass1').value;
  let ckey = CryptoJS.enc.Utf8.parse(key)
  let encrypted = CryptoJS.AES.encrypt(pass, ckey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  
 /* Tabla de usuarios */
let url = `http://localhost:8080/login?email=${user}&password=${encrypted.toString()}`;

fetch(url)
        .then(response => response.json())
        .then(data => {
         // do something with the text response 
            if(data!=null){
             /*  document.getElementById('loginVal').innerHTML = "Login exitoso!";
              localStorage.setItem('isLoggedIn', 1) */
              const usuario ={
                usuarioNombre: data.user_name,
                usuarioApellido: data.user_lastname,
                usuarioEmail: data.user_email,
                usuarioPhone: data.user_phone,
              };
            localStorage.setItem("userName", JSON.stringify(usuario));
              window.location.replace("http://localhost:3000/account");
            }else{
              document.getElementById('loginVal').innerHTML = "Usuario y/o Contraseña inválidos.";
              localStorage.setItem('isLoggedIn', 0)
            }
        })
        .catch(err=>console.log(err))

}
  