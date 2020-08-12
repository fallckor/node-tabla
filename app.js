const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/jargs").argv;
const colors = require("colors");

let comando = argv._[0];
switch (comando) {
  case "listar":
    // console.log("listar");
    // console.log(argv.base, "\n", argv.limite);
    listarTabla(argv.base, argv.limite)
      .then((resp) =>
        console.log(`Listar tabla del:${argv.base} \n`.green, `${resp}`)
      )
      .catch((err) => console.log(err));
    break;
  case "crear":
    //console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then((archivo) =>
        console.log(`Archivo creado: \n`.rainbow, `${archivo}`)
      )
      .catch((err) => console.log(err));
    break;
  default:
    console.log("comando no reconocido");
}
//console.log(argv);

//let base = 5;

// let argv2 = process.argv;
// console.log("Limite ", argv.limite);
//console.log(argv2);

// crearArchivo(base)
//   .then((archivo) => console.log(`Archivo creado: ${archivo}`))
//   .catch((err) => console.log(err));
