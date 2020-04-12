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
