// Import stylesheets
import './style.css';

const products = [
  [
    {
      title: 'hamburguesa',
      price: 450,
      thumbnail:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 1,
    },
    {
      title: 'pizza',
      price: 800,
      thumbnail:
        'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 2,
    },
    {
      title: 'papas fritas',
      price: 300,
      thumbnail:
        'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 3,
    },
    {
      title: 'empanadas',
      price: 920,
      thumbnail:
        'https://images.pexels.com/photos/6535195/pexels-photo-6535195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 4,
    },
    {
      title: 'lasaña',
      price: 750,
      thumbnail:
        'https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 5,
    },
    {
      title: 'カルボナーラ',
      price: 850,
      thumbnail:
        'https://images.pexels.com/photos/5710170/pexels-photo-5710170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 6,
    },
    {
      title: '握り寿司',
      price: 1600,
      thumbnail:
        'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 7,
    },
  ],
];

//Declaro una constante donde guardaré la nueva instancia de Promise
const getProducts = new Promise((resolve, reject) => {
  //Este setTimeout va a simular la demora del tiempo de respuesta que pueda tener un servidor al cual le solicito la lista de productos
  setTimeout(() => {
    //si la promesa se ejecuta satisfactoriamente, entonces enviaré mi respuesta como parámetro del método resolve() en este caso enviaré mi lista de productos.
    resolve(products);
    //acá indico que quiero que este setTimeout demore 3 segundos
  }, 3000);
});

//Voy a ejecutar mi función, pero como se trata de una promesa, es necesario colocar el .then( ) luego del nombre de mi función para tratar la repuesta
getProducts.then((resp) => console.log(resp));

/*El manejo del error se los dejo a ustedes 😉 */

//inyecto mi html acá por si alguien se anima a imprimir todos los productos.
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
