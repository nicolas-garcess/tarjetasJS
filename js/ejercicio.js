const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    //Busca la imagen basado en la posición del index.html y no del js
    imagen = "<img class='llave-img' src='./img/llave.png'>";
    nombre = `<h2> ${nombre} </h2>`;
    modelo = `<h3> Modelo: ${modelo} </h3>`;
    precio = `<h4> Precio: ${precio} </h4>`;

    return [imagen,nombre,modelo,precio];
}

let fragmento = document.createDocumentFragment();

for(let i = 1; i <= 20; i++)
{
    let modelo = Math.round(Math.random()*1000);
    let precio = Math.round(Math.random()*10 + 30);
    const llave = crearLlave(`Llave ${i}`, modelo, `$${precio}`);

    let div = document.createElement("div");
    //Con este evento cuando den click en un artículo, se almacene el valor que tiene el modelo de la llave en el atritbuto key-data del elemento input 
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modelo;
    });

    //Permite dejar seleccionado un div
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);