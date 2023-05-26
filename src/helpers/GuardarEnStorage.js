export const GuardarEnStorage = (clave, elemento) => {
    // Obtener los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
  
    // Verificar si es un array o si no existe en el localStorage
    if (Array.isArray(elementos)) {
      // Agregar el nuevo elemento al array existente
      elementos.push(elemento);
    } else if (elementos === null) {
      // Crear un nuevo array con el elemento si no existe en el localStorage
      elementos = [elemento];
    } else {
      // En caso de que no sea un array ni nulo, puede manejar el error o lanzar una excepción según sea necesario.
      console.error(`El valor almacenado con la clave '${clave}' no es un array válido.`);
      return null; // Puedes modificar el comportamiento según tus necesidades
    }
  
    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
  
    // Devolver el elemento guardado
    return elemento;
}
  