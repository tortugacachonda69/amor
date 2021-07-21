nombre = window.prompt("Como te llamas?");

const respuestaMq = ["SI",`Claro yo te quiero mucho ${nombre}`,`Te quiero mucho ${nombre}`,
                      "Sí dame un abrazo",`Quiero pasar mi vida contigo ${nombre}`];

const respuestaTq = [`Yo tambien te quiero ${nombre} gracias por existir`,`Yo te quiero más`,`Mentira yo tq mas`,`Cásate conmigo ${nombre}`];

const respuestaHola = [`Hola ${nombre}, que tal?`,`Hola ${nombre} que bien verte aquí`];

const respuestaOdio = [`Lo siento ${nombre} he hecho algo mal?`,`Perdona no quería hacerte daño`,
                        `Quieres hablar del tema ${nombre}?`,`Por qué me insultas ${nombre} yo te quiero :(`]

const interrogacion = [`no sé lo que has preguntado no me han programado para entenderlo todo pero yo te apoyo ${nombre}`,
                        `No lo sé la verdad pero sabes que te quiero mucho`,
                        `Ni idea yo lo que sé es que vistes muy bien ${nombre}`,
                        `La respuesta es el amor ${nombre}`];

const despedida = [`Hasta luego ${nombre} ten cuidaico por ahi`,`Hasta luego ${nombre} nos vemos un abrazo`,
                    `Venga nos vemos ${nombre} cuidate`,
                    `Venga hasta luego ${nombre} si necesitas algo ya sabes le partimos las piernas a quien te haga algo`];                        

const meLlamo = [`Me has dicho que te llamas ${nombre} y me parece un nombre muy bonito`,
                  `Te llamas ${nombre} y te quiero mucho`,`Tu nombre es ${nombre}`,
                    `${nombre.toUpperCase()}!!`];

const respuestaQtal = [`Muy bien ${nombre} muy feliz de hablar contigo`,`Yo estoy bien y tu ${nombre}?`];

const respuestaPerdon = [`No pasa nada ${nombre} te perdono`,`No te preocupes ${nombre} yo te sigo queriendo`,
                          `Vale no pasa nada ${nombre} no llores`,`Bueno vale no te ralles anda`];

const otraRespuesta = [`Eres muy especial ${nombre} te quiero`,
                        `Yo creo en ti ${nombre} ya veras`,`${nombre} eres muy guai todo saldrá bien`,
                        `Si tuviese una empresa o algo yo te contrataría`,`Eres muy especial ${nombre}`,
                        `Yo mato x ti ${nombre} te quiero`,`Yo x ti rompo craneos ${nombre} por eso no te preocupes`,
                        `Yo mato x ti bb, tu robot es un jodeor`,`Yo si tuviese dinero te haría un bizum y todo`];

function cadenaRandom(nombreCadena) {
return nombreCadena[Math.floor(Math.random() * nombreCadena.length)];
}

function robotAmoroso() {
  let mensaje = document.getElementById("entrada").value;
      mensaje = mensaje.toLowerCase()

  if (mensaje.includes("me quieres?") || 
      mensaje.includes("seguro?") ||
      mensaje.includes("quiereme") ||
      mensaje.includes("quiéreme"))
  {
    reply = cadenaRandom(respuestaMq);
  }
  else if (mensaje.includes("perdón") ||
            mensaje.includes("perdon") ||
            mensaje.includes("lo siento"))
  {
    reply = cadenaRandom(respuestaPerdon);
  }
  else if (mensaje.includes("te odio") ||
            mensaje.includes("que te follen") ||
            mensaje.includes("gilipollas") ||
            mensaje.includes("tus muertos"))
  {
    reply = cadenaRandom(respuestaOdio);
  }
  else if (mensaje.includes("me llamo?") ||
            mensaje.includes("como me llamo") ||
            mensaje.includes("quien soy") ||
            mensaje.includes("quién soy") ||
            mensaje.includes("cómo me llamo"))
  {
    reply = cadenaRandom(meLlamo)
  }
  else if ( mensaje.includes("qué tal") ||
            mensaje.includes("que tal") ||
            mensaje.includes("cómo estas") ||
            mensaje.includes("como estas"))
  {
    reply = cadenaRandom(respuestaQtal);
  }
  else if (mensaje.includes("te quiero"))
  {
    reply = cadenaRandom(respuestaTq);
  }
  else if (mensaje.includes("ta luego") ||
            mensaje.includes("adios"))
  {
    reply = cadenaRandom(despedida)
  }
  else if ( mensaje.includes("hola") ||
            mensaje.includes("buenas"))
  {
    reply = cadenaRandom(respuestaHola);
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

