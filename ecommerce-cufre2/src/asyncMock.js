import cortinaAlgodon from './assets/images/cortina-dealgodon-tela.jpg';
import cortinaVisillo from './assets/images/cortina-de-visillo.jpg';
import cortinaMezcla from './assets/images/cortina-mezcla.jpg';
import cortinaBlackout from './assets/images/cortina-blackout.jpg';
import cortinaSunscreen from './assets/images/suncreen.jpg';
import cortinaDoble from './assets/images/cortina-doble.jpg';
import cortinaLinoAlgodon from './assets/images/cortina-lino-algodon.jpg';
import cortinaDeLino from './assets/images/cortina-de-lino.jpg';
import cortinaNatural from './assets/images/cortina-natural.png';

const productos = [
    {
        id: "1",
        nombre: "Cortina Algodon",
        precio: 50000,
        categoria: "Tela",
        imagen: cortinaAlgodon,
        Descripcion: "Color blanco,ofrecen privacidad y control de luz",
        cantidad: 1,
    },
    {
        id: "2",
        nombre: "Cortina de Visillo",
        precio: 30000,
        categoria: "Tela",
        imagen: cortinaVisillo,
        Descripcion: "Color gris,ofrecen privacidad y control de luz",
        cantidad: 1,
    },
    {
        id: "3",
        nombre: "Cortina Mezcla",
        precio: 40000,
        categoria: "Tela",
        imagen: cortinaMezcla,
        Descripcion: "Color beige,ofrecen privacidad y control de luz",
        cantidad: 1,
    },
    {
        id: "4",
        nombre: "Cortina Blackout",
        precio: 70000,
        categoria: "Opaca",
        imagen: cortinaBlackout,
        Descripcion: "Color negro,aislan la luz y garantizan privacidad total.",
        cantidad: 1,
    },
    {
        id: "5",
        nombre: "Cortina Suncreen",
        precio: 55000,
        categoria: "Opaca",
        imagen: cortinaSunscreen,
        Descripcion: "Color gris,roller,aislan la luz y garantizan privacidad total.",
        cantidad: 1,
    },
    {
        id: "6",
        nombre: "Cortina Doble",
        precio: 45000,
        categoria: "Opaca",
        imagen: cortinaDoble,
        Descripcion: "Color gris oscuro,aislan la luz y garantizan privacidad total.",
        cantidad: 1,
    },
    {
        id: "7",
        nombre: "Cortina Algodon",
        precio: 25000,
        categoria: "Voile",
        imagen: cortinaLinoAlgodon,
        Descripcion: "Color blanco,livianas y elegantes, permiten la entrada de luz mientras brindan privacidad.",
        cantidad: 1,
    },
    {
        id: "8",
        nombre: "Cortina de Lino",
        precio: 40000,
        categoria: "Voile",
        imagen: cortinaDeLino,
        Descripcion: "Color marron,livianas y elegantes, permiten la entrada de luz mientras brindan privacidad.",
        cantidad: 1,
    },
    {
        id: "9",
        nombre: "Cortina Natural",
        precio: 60000,
        categoria: "Voile",
        imagen: cortinaNatural,
        Descripcion: "Color crema claro,livianas y elegantes, permiten la entrada de luz mientras brindan privacidad.",

        cantidad: 1,
    }
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

    
    export const getProducto = (id) => {
        return productos.find(producto => producto.id === id);
    };
    
  

    export const getCategoria = (categoria) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtrados = productos.filter(prod => prod.categoria === categoria);
                resolve(filtrados);
            }, 1000);
        });
    };
 