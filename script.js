document.addEventListener('DOMContentLoaded', function () {
    var gestionLink = document.getElementById('gestion');
    var subMenu = document.getElementById('subMenu');

    gestionLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    });
    
});
document.getElementById('reservasButton').addEventListener('click', function () {
    const subMenu = document.getElementById('reservas-menu');
    if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        subMenu.style.display = 'block';
    } else {
        subMenu.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var sections = document.querySelectorAll('.module-content');
            sections.forEach(function(section) {
                section.style.display = 'none';
            });

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});

document.getElementById('cancelHabitacionButton','cancelInmuebleButton').addEventListener('click', function () {
    closeModal('habitacionModal','inmuebleModal');
});

document.getElementById('cancelInmuebleButton').addEventListener('click', function () {
    closeModal('inmuebleModal');
});

document.getElementById('cancelTipohabitacionButton').addEventListener('click', function () {
    closeModal('tipoHabitacionModal');
});

document.getElementById('cancelServicioButton').addEventListener('click', function () {
    closeModal('servicioModal');
});

document.getElementById('cancelPaqueteButton').addEventListener('click', function () {
    closeModal('paqueteModal');
});


function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}



document.querySelectorAll('.close').forEach(function(span) {
    span.onclick = function() {
        closeModal(this.getAttribute('data-target'));
    }
});


document.getElementById('openHabitacionModal').onclick = function() {
    openModal('habitacionModal');
}
document.getElementById('openInmuebleModal').onclick = function() {
    openModal('inmuebleModal');
}
document.getElementById('openTipoHabitacionModal').onclick = function() {
    openModal('tipoHabitacionModal');
}
document.getElementById('openServicioModal').onclick = function() {
    openModal('servicioModal');
}
document.getElementById('openPaqueteModal').onclick = function() {
    openModal('paqueteModal');
}
document.getElementById('openeditRoomModal').onclick = function() {
    openModal('editRoomModal');
}


document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Alternar la clase "show" en la barra lateral para mostrarla/ocultarla
    sidebar.classList.toggle('show');
    
    // Mover el botón de alternancia
    toggleButton.classList.toggle('hide');
    
    // Ajustar el contenido principal
    mainContent.classList.toggle('shifted');
});

document.getElementById('openreservaModal').onclick = function() {
    openModal('reservaModal');
}

// Abrir el modal solo cuando se hace clic en un botón de eliminar
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("eliminarModal").style.display = "block";
    });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("eliminarModal").style.display = "none";
});

// Cerrar el modal al hacer clic en el botón de cancelar
document.getElementById('eliminarModal').addEventListener('click', function () {
    closeModal('eliminarModal');
});


$(document).ready(function() {
    // Inicialmente ocultar todas las secciones
    $('.content').hide();
    $('#dashboard').hide(); // Puedes cambiar esto si quieres que Dashboard sea visible por defecto

    // Manejar clic en el botón de Dashboard
    $('#dashboardButton').click(function(event) {
        event.preventDefault();
        $('.content').hide(); // Ocultar todas las secciones
        $('#dashboard').show(); // Mostrar solo la sección del Dashboard
    });

    // Manejar clic en otros botones
    $('.nav-link').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href'); // Obtener el href del botón clicado

        // Ocultar todas las secciones
        $('.content').hide();

        // Mostrar la sección correspondiente
        $(target).show();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleFormBtn = document.getElementById('toggle-form-btn');
    const formContainer = document.getElementById('form-container');


    toggleFormBtn.addEventListener('click', function() {
        // Alterna la clase 'hidden' en el contenedor del formulario
        formContainer.classList.toggle('hidden');


        // Cambia el texto del botón dependiendo del estado del formulario
        if (formContainer.classList.contains('hidden')) {
            toggleFormBtn.textContent = 'Agregar Usuario Nuevo';
        } else {
            toggleFormBtn.textContent = 'Ocultar Formulario';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var estadoSelect = document.querySelector('.estado-btn');
    var modal = document.getElementById('confirmModal');
    var closeBtn = document.querySelector('.close');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var previousValue = estadoSelect.value; // Valor anterior del select

    // Al cambiar el estado en el menú desplegable
    estadoSelect.addEventListener('change', function(event) {
        modal.style.display = 'block';
    });

    
  
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
        estadoSelect.value = previousValue;
    };
    
}

 
      

