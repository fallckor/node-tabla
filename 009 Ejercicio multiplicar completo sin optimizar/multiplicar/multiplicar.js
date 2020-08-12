const fs = require("fs");

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) && !Number(liminte)) {
      reject(`El valor no es un número: ${base} ${limite}`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data = data + `${base}*${i}=${base * i}\n`;
    }
    resolve(`${data}`);
  });
};
let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) && !Number(liminte)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data = data + `${base}*${i}=${base * i}\n`;
      //console.log(`${base}*${i}=${base * i}`);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) recject(err);
      else resolve(data);
      //else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
