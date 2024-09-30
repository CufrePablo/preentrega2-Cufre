import { useEffect, useState } from 'react';
import { getProductos } from '../asyncMock.js';
import ProductCard from './ProductCard';
import "./ProductsList.css"
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    getProductos().then((productos) => setProducts(productos)).catch(error => {
      console.error("Error al cargar productos:", error);
    });
  }, []);

  return (
    <section className='products-list'>
      {productos.map(producto => (
  <div key={producto.id}>
    <h3>{producto.nombre}</h3>
    <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
  </div>
))}
    </section>
  );
}
