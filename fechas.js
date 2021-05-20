var x = new Date();
    console.log(x.getDay());
    switch (x.getDay()) {
        case 0:
            document.getElementById('reloj').innerHTML = "Lunes";
            document.getElementById('relojdos').innerHTML = "Martes";
            document.getElementById('relojtres').innerHTML = "Miercoles";
            break;
        case 1:
            document.getElementById('reloj').innerHTML = "Martes";
            document.getElementById('relojdos').innerHTML = "Miercoles";
            document.getElementById('relojtres').innerHTML = "Jueves";
            break;
        case 2:
            document.getElementById('reloj').innerHTML = "Miercoles";
            document.getElementById('relojdos').innerHTML = "Jueves";
            document.getElementById('relojtres').innerHTML = "Viernes";
            break;
        case 3:
            document.getElementById('reloj').innerHTML = "Jueves";
            document.getElementById('relojdos').innerHTML = "Viernes";
            document.getElementById('relojtres').innerHTML = "Sabado";
            break;
        case 4:
            document.getElementById('reloj').innerHTML = "Viernes";
            document.getElementById('relojdos').innerHTML = "Sabado";
            document.getElementById('relojtres').innerHTML = "Domingo";
            break;
        case 5:
            document.getElementById('reloj').innerHTML = "Sabado";
            document.getElementById('relojdos').innerHTML = "Domingo";
            document.getElementById('relojtres').innerHTML = "Lunes";
            break;
        case 6:
            document.getElementById('reloj').innerHTML = "Domingo";
            document.getElementById('relojdos').innerHTML = "Lunes";
            document.getElementById('relojtres').innerHTML = "Martes";
            break;
    
        default:
            break;
    }