var assert = require('assert');

var miFuncion = require("./funcion");
describe("Bat1", function(){
  it("Probando funcion mal", function(){
         assert.ok(miFuncion(5,3) == 5+2, "Ha ido mal");
    })
})