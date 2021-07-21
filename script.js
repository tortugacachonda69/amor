const nombre = window.prompt("Como te llamas?");

const respuestaMq = ["SI",`Claro yo te quiero mucho ${nombre}`,`Te quiero mucho ${nombre}`,"Sí dame un abrazo",`Quiero pasar mi vida contigo ${nombre}`];

const respuestaHola = [`Hola ${nombre}, que tal?`,`Hola ${nombre} que bien verte aquí`];

const otraRespuesta = [`Eres muy especial ${nombre} te quiero`,
                        `Yo creo en ti ${nombre} ya veras`,`${nombre} eres muy guai todo saldrá bien`,
                        `Si tuviese una empresa o algo yo te contrataría`,`Eres muy especial ${nombre}`,
                        `Yo mato x ti ${nombre} te quiero`];

const interrogacion = [`no sé lo que has preguntado no me han programado para entenderlo todo pero yo te apoyo ${nombre}`,
                        `No lo sé la verdad pero sabes que te quiero mucho`,`Ni idea yo lo que sé es que vistes muy bien ${nombre}`]

const despedida = [`Hasta luego ${nombre} ten cuidaico por ahi`,`Hasta luego ${nombre} nos vemos un abrazo`,
                    `Venga nos vemos ${nombre} cuidate`,
                    `Venga hasta luego ${nombre} si necesitas algo ya sabes le partimos las piernas a quien te haga algo`]                        

const meLlamo = [`Me has dicho que te llamas ${nombre} y me parece un nombre muy bonito`,`Te llamas ${nombre} y te quiero mucho`,`Tu nombre es ${nombre}`]

function cadenaRandom(nombreCadena) {
return nombreCadena[Math.floor(Math.random() * nombreCadena.length)];
}

function robotAmoroso() {
  let mensaje = document.getElementById("entrada").value;
  
  if (mensaje.includes("me quieres?") || mensaje.includes("seguro?")){
    reply = cadenaRandom(respuestaMq);
  }
  else if (mensaje.includes("me llamo?"))
  {
    reply = cadenaRandom(meLlamo)
  }
  else if (mensaje.includes("hola")){
    reply = cadenaRandom(respuestaHola);
  }
  else if (mensaje.includes("ta luego") || mensaje.includes("adios"))
  {
    reply = cadenaRandom(despedida)
  }
  else if (mensaje.includes("?"))
  {
    reply = cadenaRandom(interrogacion)
  }
  else {
    reply = cadenaRandom(otraRespuesta);
  }
  document.getElementById("respuesta").innerHTML = reply;
  document.getElementById("entrada").value = "";
}

