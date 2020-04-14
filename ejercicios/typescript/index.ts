// Booleans
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador/denominador;

// string
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('Antonio');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers = ['Isabel', 'Nicole', 'Raul'];
peopleAndNumbers.push(9001);

// Enum
enum Color { Rojo = 'rojo', Verde = 'verde', Azul = 'azul'}
let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: Object = { type: 'Wildcard' };


// ====================================== //
// FUNCIONES
// ====================================== //

function add(a: number, b: number): number {
  return a + b;
}
const sum = add(4, 6);


function createAdder (a: number): (b: number) => number {
  return function (b: number) {
    return b + a;
  }
}
const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(fisrtName: string, lastName?: string = 'Smith'): string {
  return `${fisrtName} ${lastName}`;
}

const aaron = fullName('Aaron');
console.log(aaron);

// ====================================== //
// INTERFACES
// ====================================== //

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
};

let rect: Rectangulo = {
  ancho: 4,
  alto: 6
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(`Área de ${areaRect}`);

rect.toString = function() {
  return this.color ? `Un rectángulo ${this.color}`: 'Un rectángulo';
}
console.log(rect.toString());