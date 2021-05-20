// URLs de las APIS a consumir
    // Documentacion API + id de la ciudad "Bogota --> 5095808" + apikey
let url_prueba = `https://api.openweathermap.org/data/2.5/forecast?id=5095808&units=metric&ang=es&appid=aac69d3f24dc0d7ae25b86fc04b01988`;
    // Documentacion API + id de la ciudad "Bogota, Paris, Lyon" + apikey
let url_prueba_dos = `https://api.openweathermap.org/data/2.5/group?id=5095808,6455259,2996944&units=metric&ang=es&appid=aac69d3f24dc0d7ae25b86fc04b01988`;

// Se separa por funciones los dos paises
function obtenerDatosBogota() {
    const api = new XMLHttpRequest();
    api.open('GET', url_prueba, true);
    api.send();
    api.onreadystatechange = function () {
        // Se valida que tengamos una respuesta True
        if (this.status == 200 && this.readyState == 4) {
            // Se Consume la Api de la ciudad de Bogota, validando a su vez los tiempos futuros
            let datos = JSON.parse(this.responseText);
            // Se verifica por consola si extraemos los datos de la API
            console.log("ACA 1"); 
            console.log(datos);
            // Para separar las variables similares para distintos dias que se requeiren con una validacion de un True
            if (datos) {
                // Consumo de las variables que se va a requerir en el dia presente
                const {name} = datos.city;
                const {icon, description}=datos.list[0].weather[0];
                const {temp, humidity}=datos.list[0].main;
                const {speed} = datos.list[0].wind;
                // Envio de las variables a las clases creadas en Html
                console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".city").innerHTML = "" +name;
                document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+icon+".png";
                document.querySelector(".descripcion").innerHTML = "" +description;
                document.querySelector(".temp").innerHTML = temp + " ºC";
                document.querySelector(".humidity").innerHTML = "" + humidity + "%";
                document.querySelector(".wind").innerHTML = "" + speed + " km/h";
            }
            if (datos) {
                // Consumo de las variables que se va a requerir en el dia siguiente
                let datos = JSON.parse(this.responseText);
                const {dt_txt} = datos.list[8];
                const {temp_min, temp_max} = datos.list[8].main;
                const {description, icon} = datos.list[8].weather[0];
                // Envio de las variables a las clases creadas en Html
                document.querySelector(".fecha_siguiente").innerHTML = "" + dt_txt;
                document.querySelector(".temp_siguiente_min").innerHTML = "" + temp_min + " ºC/ ";
                document.querySelector(".temp_siguiente_max").innerHTML = "" + temp_max + " ºC";
                document.querySelector(".descripcion_siguiente").innerHTML = "" + description;
                document.querySelector(".icon_siguiente").src ="https://openweathermap.org/img/wn/"+icon+".png";
            }
            if (datos) {
                // Consumo de las variables que se va a requerir al segundo dia
                const {dt_txt} = datos.list[16];
                const {temp_min, temp_max} = datos.list[16].main;
                const {description, icon} = datos.list[16].weather[0];
                // Envio de las variables a las clases creadas en Html
                document.querySelector(".fecha_pasado").innerHTML = "" + dt_txt;
                document.querySelector(".temp_pasado_min").innerHTML = "" + temp_min + "/ ";
                document.querySelector(".temp_pasado_max").innerHTML = "" + temp_max + " ºC";
                document.querySelector(".descripcion_pasado").innerHTML = "" + description;
                document.querySelector(".icon_pasado").src ="https://openweathermap.org/img/wn/"+icon+".png";
            }
            if (datos) {
                // Consumo de las variables que se va a requerir al tercer dia
                const {dt_txt} = datos.list[24];
                const {temp_min, temp_max} = datos.list[24].main;
                const {description, icon} = datos.list[24].weather[0];
                
                document.querySelector(".fecha_pasado_mas").innerHTML = "" + dt_txt;
                document.querySelector(".temp_pasado_mas_min").innerHTML = "" + temp_min + "/ ";
                document.querySelector(".temp_pasado_mas_max").innerHTML = "" + temp_max + " ºC";
                document.querySelector(".descripcion_pasado_mas").innerHTML = "" + description;
                document.querySelector(".icon_pasado_mas").src ="https://openweathermap.org/img/wn/"+icon+".png";

            }
        }
    }
};

function ObtenerDatosParis() {
    // Se Consume la Api de las dos ciudades del pais de Francia
    const apidos = new XMLHttpRequest();
    apidos.open('GET', url_prueba_dos, true);
    apidos.send();
    
    apidos.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4){

            let datosb = JSON.parse(this.responseText);
            apidos.open('GET', url_prueba_dos, true);
            apidos.send();
            // Consumo de las variables de la ciudad Lyon FR
            if (datosb) {
                console.log("ACA 2");

                console.log(datosb);

                const {name} = datosb.list[2];
                const {icon, description}=datosb.list[2].weather[0];
                const {temp, humidity}=datosb.list[2].main;
                const {speed} = datosb.list[2].wind;
                console.log(name,icon,description,temp,humidity,speed);

                document.querySelector(".nombre_paris_lyon").innerHTML = "" + name;
                document.querySelector(".descripcionlyon").innerHTML = "" + description;
                document.querySelector(".humiditylyon").innerHTML = "Humidity: " + humidity + "%";
                document.querySelector(".windlyon").innerHTML = "" + speed + " km/h";
                document.querySelector(".templyon").innerHTML = "" + temp + "ºC";
                document.querySelector(".iconlyon").src ="https://openweathermap.org/img/wn/"+icon+".png";

            }
            // Consumo de las variables de la ciudad paris FR
            if (datosb) {
                const {name} = datosb.list[1];
                const {icon, description}=datosb.list[1].weather[0];
                const {temp, humidity}=datosb.list[1].main;
                const {speed} = datosb.list[1].wind;
                console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".nombre_paris_paris").innerHTML = "" + name;
                document.querySelector(".descripcionparis").innerHTML = "" + description;
                document.querySelector(".humidityparis").innerHTML = "Humidity: " + humidity + "%";
                document.querySelector(".windparis").innerHTML = "" + speed + " km/h";
                document.querySelector(".tempparis").innerHTML = "" + temp + "ºC";
                document.querySelector(".iconparis").src ="https://openweathermap.org/img/wn/"+icon+".png";
            }
        }
    }
};
// Cuando carge la pagina se ejecute automaticamente las funciones creadas
window.onload = obtenerDatosBogota();
window.onload = ObtenerDatosParis();








