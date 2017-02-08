"use strict";
const miBuf = Buffer.from("Hola mundo", "utf8");
miBuf[3] = 67;
const cadena = miBuf.toString();
const miBuf2 = Buffer.alloc(20);
miBuf2[2] = miBuf[0];
miBuf2[4] = miBuf[1];
miBuf2[6] = miBuf[2];
miBuf2[8] = miBuf[3];


console.log("Valor del buffer");
console.log(miBuf);

console.log("Valor de la cadena");
console.log(cadena);

console.log("Valor del buffer 2");
console.log(miBuf2);

const buf3 = Buffer.alloc(30);

const word1 = Buffer.from("Hello", "utf8");
const word2 = Buffer.from("world", "utf8");

word1.copy(buf3, 0);
word2.copy(buf3, 7);

buf3.writeUInt32BE(123666666, 11)
buf3.writeUInt32LE(123666666, 17)

console.log(buf3.toString("utf8"));