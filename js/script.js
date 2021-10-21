const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,15}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    password: false
}

const validarCampoSeleccionado = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, "apellido");
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        document.getElementById(`error-${campo}`).innerHTML= "";
        document.getElementById(`${campo}`).classList.remove("error");
        campos[campo] = true;
	} else {
        switch (input.name) {
            case "nombre":
                document.getElementById(`error-${campo}`).innerHTML= "Debes ingresar un nombre válido (2 a 15 letras)";
            break;
            case "apellido":
                document.getElementById(`error-${campo}`).innerHTML= "Debes ingresar un apellido válido (2 a 15 letras)";
            break;
            case "correo":
                document.getElementById(`error-${campo}`).innerHTML= "Debes ingresar un email válido";
            break;
            case "password":
                document.getElementById(`error-${campo}`).innerHTML= "Debes ingresar una contraseña de 8 digitos";
            break;
        }
		
        document.getElementById(`${campo}`).classList.add("error");
        campos[campo] = false;
	}
}

inputs.forEach((input) => {
    input.addEventListener("blur", validarCampoSeleccionado);
});

formulario.addEventListener("submit", (e) => {
     if(campos.nombre && campos.apellido && campos.correo && campos.password){
        document.formulario.submit();
     } else {
        e.preventDefault();
        validarCampo(expresiones.nombre, nombre, "nombre");
        validarCampo(expresiones.nombre, apellido, "apellido");
        validarCampo(expresiones.correo, correo, "correo");
        validarCampo(expresiones.password, password, "password");
     }
    });
   