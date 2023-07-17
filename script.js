
function validarFormularioDoctor() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const especialidad = document.getElementById('especialidad').value.trim();
    const consultorio = document.getElementById('consultorio').value.trim();
    const correo = document.getElementById('correo').value.trim();
    
    
    // Expresiones regulares para validar campos
    const nombreDoctorExp = /^[A-Za-z\s]+$/;
    const apellidoDoctorExp = /^[A-Za-z\s]+$/;
    const consultorioDoctorExp = /^[0-9]+$/;
    const correoDoctorExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar el campo de nombre utilizando la expresión regular
    if (!nombreDoctorExp.test(nombre)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    // Validar el campo de apellido utilizando la expresión regular
    if (!apellidoDoctorExp.test(apellido)) {
        alert('Por favor, ingrese un apellido válido (solo letras y espacios).');
        return false;   
    }

    function especialidadValida(especialidad) {
        const opcionesValidas = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
    
        return opcionesValidas.includes(especialidad);
    }
    // Validar el campo de consultorio utilizando la expresión regular
    if (!consultorioDoctorExp.test(consultorio)) {
        alert('El número de consultorio solo debe contener números.');
        return false;
    }
    // Validar el campo de correo utilizando la expresión regular
    if (!correoDoctorExp.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
     // Asignar las funciones de validación a los formularios
    const doctorForm = document.getElementById('doctor-form');
    doctorForm.addEventListener('submit', (event) => {
    if (!validarFormularioDoctor()) {
    event.preventDefault();
    }
    });
    // Crear el objeto con la información del doctor
    const doctor = {
    nombre: nombre,
    apellido: apellido,
    especialidad: especialidad,
    consultorio: consultorio,
    correo: correo
    };
    // Convertir el objeto a formato JSON
    const doctorJSON = JSON.stringify(doctor);
     // Ejemplo de cómo mostrar el objeto JSON en la consola
        console.log(doctorJSON );
        // Crear un enlace de descarga para el archivo JSON
            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(doctorJSON);
            enlaceDescarga.download = 'formulario.json';
            enlaceDescarga.innerHTML = 'Descargar JSON';
            document.body.appendChild(enlaceDescarga);

            // Simular el clic en el enlace de descarga para iniciar la descarga
            enlaceDescarga.click();

            // Eliminar el enlace de descarga del DOM
            document.body.removeChild(enlaceDescarga);
            // Función para cargar y mostrar el listado de doctores
    function mostrarListadoDoctores() {
        fetch('doctores.json')
        .then(response => response.json())
        .then(doctores => {
            const doctoresListaDiv = document.getElementById('doctores-lista');
            doctoresListaDiv.innerHTML = '';
            doctores.forEach(doctor => {
                const doctorDiv = document.createElement('div');
                doctorDiv.innerHTML = `
                    <h2>${doctor.nombre} ${doctor.apellido}</h2>
                    <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
                    <p><strong>Consultorio:</strong> ${doctor.consultorio}</p>
                    <p><strong>Correo:</strong> ${doctor.correo}</p>
                    <hr>
                `;
                doctoresListaDiv.appendChild(doctorDiv);
            });
        })
        .catch(error => console.error('Error al cargar los doctores:', error));
    }
    
    // Llamar a la función para cargar y mostrar el listado de doctores cuando se cargue la página
    document.addEventListener('DOMContentLoaded', mostrarListadoDoctores);
    return true;
}
   // Asignar las funciones de validación a los formularios
    const doctorForm = document.getElementById('doctor-form');
    doctorForm.addEventListener('submit', (event) => {
    if (!validarFormularioDoctor()) {
    event.preventDefault();
}
});
// Función para validar campos del formulario de pacientes
function validarFormularioPaciente() {
    const nombrePaciente = document.getElementById('nombre_paciente').value.trim();
    const apellidoPaciente = document.getElementById('apellido_paciente').value.trim();
    const cedulaPaciente = document.getElementById('cedula_paciente').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const especialidadRequerida = document.getElementById('especialidad').value.trim();

    // Expresión regular para validar cédula (10 a 12 dígitos numéricos)
     // Expresiones regulares para validar campos
    const nombrePattern = /^[A-Za-z\s]+$/;
    const apellidoPattern = /^[A-Za-z\s]+$/;
    const cedulaPattern = /^[0-9]{8,12}$/;
    const edadPattern = /^\d+$/;
    const telefonoPattern = /^\d+$/;

    // Validar el campo de nombre utilizando la expresión regular
    if (!nombrePattern.test(nombrePaciente)) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;   
    }

    // Validar el campo de apellido utilizando la expresión regular
    if (!apellidoPattern.test(apellidoPaciente)) {
        alert('Por favor, ingrese un apellido válido (solo letras y espacios).');
        return false;   
    }

    if (!cedulaPattern.test(cedulaPaciente)) {
        alert('La cédula debe contener entre 10 y 12 dígitos numéricos.');
        return false;
    }
     // Validar edad utilizando la expresión regular
    if (!edadPattern.test(edad)) {
        alert('Por favor, ingrese una edad válida (solo números enteros).');
        return false;
    }
    // Validar teléfono utilizando la expresión regular
    if (!telefonoPattern.test(telefono)) {
        alert('Por favor, ingrese un teléfono válido (solo números).');
        return false;
    }
    function especialidadValida(especialidadRequerida) {
        const opcionesValidas = ['Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología'];
    
        return opcionesValidas.includes(especialidadRequerida);
    }
     // Crear el objeto con la información del paciente
    const paciente = {
    nombre:nombrePaciente,
    apellido: apellidoPaciente,
    cedula: cedulaPaciente,
    edad: edad,
    telefono: telefono,
    especialidadRequerida:especialidadRequerida
    }; 
    // Convertir el objeto a formato JSON
    const pacienteJSON = JSON.stringify(paciente);

  // Ejemplo de cómo mostrar el objeto JSON en la consola
    console.log(pacienteJSON);
    
       // Crear un enlace de descarga para el archivo JSON
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(pacienteJSON);
        enlaceDescarga.download = 'formulario.json';
        enlaceDescarga.innerHTML = 'Descargar JSON';
        document.body.appendChild(enlaceDescarga);

        // Simular el clic en el enlace de descarga para iniciar la descarga
        enlaceDescarga.click();

        // Eliminar el enlace de descarga del DOM
        document.body.removeChild(enlaceDescarga);
           // Función para cargar y mostrar el listado de doctores

function mostrarListadoPacientes() {
    fetch('pacientes.json')
    .then(response => response.json())
    .then(pacientes => {
        const pacientesListaDiv = document.getElementById('pacientes-lista');
        pacientesListaDiv.innerHTML = '';
        pacientes.forEach(paciente => {
            const pacienteDiv = document.createElement('div');
            pacienteDiv.innerHTML = `
            <h2>${paciente.nombre} ${paciente.apellido}</h2>
            <p><strong>Cédula:</strong> ${paciente.cedula}</p>
            <p><strong>Edad:</strong> ${paciente.edad}</p>
            <p><strong>Teléfono:</strong> ${paciente.telefono}</p>
            <p><strong>Especialidad Requerida:</strong> ${paciente.especialidadRequerida}</p>
            <hr>
            `;
            pacientesListaDiv.appendChild(pacienteDiv);
        });
    })
    .catch(error => console.error('Error al cargar los pacientes:', error));
}

// Llamar a la función para cargar y mostrar el listado de doctores cuando se cargue la página
document.addEventListener('DOMContentLoaded', mostrarListadoPacientes);

    return true;
}
 const pacienteForm = document.getElementById('paciente-form');
    pacienteForm.addEventListener('submit', (event) => {
    if (!validarFormularioPaciente()) {
        event.preventDefault();
    }
});
