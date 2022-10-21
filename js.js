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
      alert("Tienes que ingresar un nombre");
      return false;
    }
    else if (apellido == "") 
    {
      alert("Tienes que ingresar un apellido");
      return false;
    }
    else if(matricula == "")
    {
      alert("Necesita introducir una matricula")
      return false;
    }
    else if (nota < 0 || nota > 100) 
    {
      alert("La calificacion tiene que estar entre 0 y 100");
      return false;
    }
    //En caso de dejar la seccion de notas vacia
    else if(nota == "")
    {
      alert("Necesita introducir una calificacion")
      return false;
    }      
    if (!isNameValid) {
      alert("El nombre no puede contener caracteres especiales");
      return false;
    }
    if (!isLnameValid) {
    alert("El apellido no puede contener caracteres especiales");
    return false;
    }
    //Si el formulario es valido, crear instancia
    let estudiante1 = new Estudiante(nombre, apellido, matricula, nota)
    console.log(estudiante1);
  }



