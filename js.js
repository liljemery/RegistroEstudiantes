//Funcion a ser ejecutada cuando se suba el formulario
function validarForm() {
  //Clase Constructora de estudiante.
    class Estudiante{
      constructor(nombre,apellido,matricula,nota){
          this.nombre = nombre;
          this.apellido = apellido;
          this.matricula = matricula;
          this.nota = nota;
      }
    }
    // Special character validation
    let regex = /^[A-Za-z ]+$/
    // 
    let nombre = document.forms["myForm"]["nombre"].value;
    let isNameValid = regex.test(document.forms["myForm"]["nombre"].value);
    let apellido = document.forms["myForm"]["apellido"].value;
    let isLnameValid = regex.test(document.forms["myForm"]["apellido"].value);
    let matricula = document.forms["myForm"]["matricula"].value;
    let nota = document.forms["myForm"]["score"].value;
    //Validar formulario
    if (nombre == "") 
    {
      document.getElementById("nombre").setAttribute("placeholder", "Ingresa un nombre")
      document.getElementById("nombre").style.filter = "drop-shadow(0 0 0.20rem red)";
      return false;
    }
    else if (apellido == "") 
    {
      document.getElementById("nombre").style.filter = "drop-shadow(0 0 0.20rem gray)";
      document.getElementById("apellido").setAttribute("placeholder", "Ingresa un apellido")
      document.getElementById("apellido").style.filter = "drop-shadow(0 0 0.20rem red)";
      return false;
    }
    else if(matricula == "")
    {
      document.getElementById("apellido").style.filter = "drop-shadow(0 0 0.20rem gray)";
      document.getElementById("matricula").setAttribute("placeholder", "Ingresa tu matricula")
      document.getElementById("matricula").style.filter = "drop-shadow(0 0 0.20rem red)";
      return false;
    }
    else if (nota < 0 || nota > 100 || nota == "") 
    {
      document.getElementById("matricula").style.filter = "drop-shadow(0 0 0.20rem gray)";
      document.getElementById("nota").setAttribute("placeholder", "Insertar una califacion")
      document.getElementById("nota").style.filter = "drop-shadow(0 0 0.20rem red)";
      return false;
    }
    //En caso de nombre y apellido contener carateres especiales.
    if (!isNameValid) {
      document.getElementById("nota").style.filter = "drop-shadow(0 0 0.20rem gray)";
      alert("El nombre no puede contener caracteres especiales");
      document.getElementById("nombre").style.filter = "drop-shadow(0 0 0.20rem red)";
      return false;
    }
    if (!isLnameValid) {
      document.getElementById("nombre").style.filter = "drop-shadow(0 0 0.20rem gray)";
    alert("El apellido no puede contener caracteres especiales");
    document.getElementById("apellido").style.filter = "drop-shadow(0 0 0.20rem red)";
    return false;
    }
    document.getElementById("apellido").style.filter = "drop-shadow(0 0 0.20rem gray)";
    //Si el formulario es valido, crear instancia
    let estudiante1 = new Estudiante(nombre, apellido, matricula, nota)
    console.log(estudiante1);
  }



