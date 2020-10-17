export default function validarCrearCuenta(valores) {

  let errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "Name required";
  }

  // validar empresa
  if (!valores.empresa) {
    errores.empresa = "Company name required"
  }

  // validar la url
  if (!valores.url) {
    errores.url = 'URL required';
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL not valid"
  }

  // validar descripción.
  if (!valores.descripcion) {
    errores.descripcion = "Description required"
  }


  return errores;
}