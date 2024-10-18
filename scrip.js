//cambie var por const y puse getElementary, además que vincule todo con la id
document.addEventListener('DOMContentLoaded', () => {
    const listaInvitados = document.getElementById("listaInvitados");
    const nombreInvitado = documento.getElementById ("nombreInvitado");
    const edadInvitado = documento.getElementById ("edadInvitado");  
    const nacionalidadInvitado  = documento.getElementById ("nacionalidadInvitado");
    const invitadoForm = document.getElementById("invitadoForm");
  
  // Agregar invitado a la lista
      invitadoForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nombre = nombreInvitado.value.trim();
      const edad = edadInvitado.value.trim(); 
      const nacionalidad = nacionalidadInvitado.value();
  
      if (nombre === '' || edad === '' || nacionalidad === '') {
        alert('Por favor, llena todos los campos');
        return;
      }
  
      const li = document.createElement('li');
      li.classList.add ('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.innerHTML = `
        ${nombre} (${edad} años) - ${nacionalidad}
       <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
      `; 
    
    // Agregar el nuevo invitado a la lista
    
      listaInvitados.appendChild(li);
      nombreInvitado.value = ''; // Limpiar campo de nombre
      nacionalidadInvitado.value = ''; // Limpiar campo de nacionalidad
    });
     // Eliminar invitado de la lista
     listaInvitados.addEventListener('click', (e) => {
      if (e.target.classList.contains('eliminar')) {
        e.target.parentElement.remove();
      }
    });
  });