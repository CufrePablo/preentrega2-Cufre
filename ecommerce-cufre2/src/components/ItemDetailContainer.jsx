import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../asyncMock';

export default function ItemDetailContainer() {
  const [producto, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProducto(id));
  }, []);

  return (
    <>
      <article style={{ border: '1px solid white', padding: 40 }}>
        <h2>Detalles del producto</h2>
        <h4>
          {producto.nombre} - {producto.categoria}
        </h4>
        <img className='producto-imagen-detalle' src={producto.imagen} alt={producto.nombre} />
        <p>Descripcion: {producto.descripcion}</p>
        <p>$ {producto.precio}</p>
      </article>
    </>
  );
}