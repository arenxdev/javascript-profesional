# CURSO PROFESIONAL DE JAVASCRIPT

## INTRODUCCIÓN

### ¿Qué significa ser un profesional de JavaScript?

Richard Kaufman trabaja para KickAss Partners como Senior Front End Engineer y es organizador de la comunidad de Javascript en Ciudad De México. Richard será tu profesor en este curso, él te va a enseñar Javascript puro, repasando los fundamentos clave del lenguaje, explorando APIs del DOM, implementando TypeScript y aplicando las mejores prácticas con Patrones de Diseño.

Vamos a necesitar:

- Editor de textos Visual Studio Code.
- Navegador Web Google Chrome.
- Una CLI (terminal de linea de comandos)…

Es recomendable tener conocimientos en:

- HTML
- CSS
- Básicos de Javascript

En la pestaña de Archivos y Enlaces encontrarás todos los cursos necesarios que forman parte de la EscuelaJS.

En este curso es el primer paso para convertirte en un profesional de Javascript que cumple con lo siguiente:

- Conocimiento profundo del lenguaje, conocer sus particularidades y cómo funciona internamente.
- Conocer los entornos de programación para Javascript.
- Siempre aplicar las mejores prácticas.
- Ser versado en código, leer código de otras personas.
- Tener un set de herramientas que dominas.
- Ética / Profesionalismo
- Experiencia.

Y recuerda que puedes encontrar a tu profesor en twitter como @sparragus.

### Inicio del proyecto

Trabajaremos en el proyecto PlatziVideo, una plataforma de vídeo.

Esta es la base de nuestro proyecto y nos vamos a enfocar en el MediaPlayer. Durante el curso se desarrollarán plugins de forma modular para extender la funcionalidad del MediaPlayer.

El repositorio de este curso lo encuentras en: https://github.com/platzi/javascript-profesional.

## REPASO CONCEPTOS FUNDAMENTALES

### Cómo llega un script al navegador

El **DOM **es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:

- async. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
- defer. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.

### Scope

El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

- Global Scope:

Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

- Function Scope:

Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

- Block Scope

Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

- Module Scope

Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

### Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

### this

this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

- Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
- Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
- Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.

### Los métodos call, apply y bind

Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

- functionName.call(). Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
- functionName.apply(). Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
- functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.

### Prototype

En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la **prototype chain**.

La keyword **new** crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir __prototype__ con __proto__ que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.

### Herencia Prototipal

Por default los objetos en JavaScript tienen cómo prototipo a **Object** que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.

La función **hasOwnProperty** sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

## ¿CÓMO FUNCIONA JAVASCRIPT?

### Parsers y el Abstract Syntax Tree

- ¿Qué hace un JS Engine?

1. Recibe un código fuente.
2. Parsea el código y produce un Abstract Syntax Tree (AST).
3. Se compila a bytecode y se ejecuta.
4. Se optimiza a machine code y se reemplaza el código base.

![JS Engine](./assets/images/JSEngine.png)

¿Qué hace un parser?

![Parser](./assets/images/parser.png)

Un **SyntaxError** es lanzado cuando el motor de JavaScript se encuentra con partes de código que o forman parte de la sintaxis del lenguaje al momento de analizar el código.

- Google dice:

1. Parsing es 15-20% del proceso de ejecución.
2. La mayoría de JavaScript en una página nunca se ejecuta.
3. Esto hace que **building y code splitting** sea muy importante.

- Parser de VO:

![Parser de V8](./assets/images/parser.png)

¿Qué es el AST (Abstract Syntax Tree)

Es un grafo (estructura de datos) que representa un programa.

Se usa en:

- JavaScript Engine.
- Bundlers: Webpack, Rollup, Parcel.
- Transpilers: Babel.
- Linters: ESLint, Prettify.
- Type Checkers: TypeScript, Flow.
- Syntax Highlighters.

El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

1. El parser descompone y crea tokens que integran el AST.
2. Se compila a bytecode y se ejecuta.
3. Lo que se pueda se optimiza a machine code y se reemplaza el código base.

Un SyntaxError es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

### Práctica AST

![AST](./assets/images/practica-ast.png)

```javascript
export default function(context) {
  return {
    VariableDeclaration(node) {
      // tipo de variable const
      if (node.kind === 'const') {
        const declaration = node.declarations[0];
        // Asegurarnos que el valor es un número
        if (typeof declaration.init.value === 'number') {
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            context.report({
              node: declaration.id,
              message: 'El nombre de la constante debe estar en mayúsculas',
              fix: function(fixer) {
                return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase());
              }
            });
          }
        }
      }
    }
  };
};

```

### Cómo funciona el JavaScript Engine

Una vez tenemos el **AST** ahora hay que convertirlo a Bytecode.

**Bytecode** es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual **V8** del navegador.

Machine code es el más bajo nivel, es código binario que va directo al procesador.

El **profiler** se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

- SpiderMonkey - Firefox: 2 capas de optimizacipon.
- Chackra - Edge: 2 capas de optimización.
- JavaScriptCore - Safari: 3 capas de optimización.
- V8 - Chrome

¿Qué hace el JS Engine?

1. Recibe código fuente.
2. Parsea el código y produce un AST (Abstract Syntax Tree).
3. Se compila a bytecode y se ejecuta.
4. Se optimiza el machine code y se reemplaza el código base.

| Bytecode                         | Machine Code                                            |
|----------------------------------|---------------------------------------------------------|
| Código parecido a assembly       | Binario                                                 |
| Portatil                         | Instruccioes specíficas a una arquitectura o procesador |
| Ejecutado por una virtua machine |                                                         |

### Event Loop

El **Event Loop** hace que Javascript parezca ser **multihilo** a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

- Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
- Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
- Task Queue. Aquí se agregan las tareas que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

![Event Loop](./assets/images/EventLoop.png)