export default function validarCrearCuenta(valores) {

  let errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "Name required";
  }

  // validar el email
  if (!valores.email) {
    errores.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email not valid"
  }

  // validar el password
  if (!valores.password) {
    errores.password = "Password required";
  } else if (valores.password.length < 6) {
    errores.password = 'Minimum length 6 characters'
  }

  return errores;
}