# practica4.github.io

## Objetivos: 

### Llamadas asíncronas a un API rest:

- Llamada a la API de cambio de moneda: 
- Uso de una función asíncrona en el archivo api.js:
  
`function getResults() { 
fetch(`${api}`).
then(currency => {
  return currency.json();
  }).then(displayResults);
  }`

### Uso de interacción del DOM en CAMBIO.html

- Con la función de displayResults(), tenemos interacción
- Primero operación del cambio de datos: 
  - Recogida de datos 
  - Lógica con ayuda de la API, con los datos del JSON
  - Visulización del resultado en HTML
- Creación de un plot con los datos del JSON
- Para visualizarlo:
  - Realaizar una operación de cambio de moneda
  - Pinchar el botón : "ver valor del euro"

### Extra: 

- reultados.js = recoge los datos de un formulario (cuestionario.html) y los muestra en otro elemento
- exit.js = hace una búsqueda local para movernos entre nuestras ventanas

