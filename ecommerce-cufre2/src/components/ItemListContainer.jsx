// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getCategoria, getProductos } from '../asyncMock';
// import ProductCard from './ProductCard';

// const ItemListContainer = () => {
//     const { categoria } = useParams();
//     const [productos, setProductos] = useState([]);

//     useEffect(() => {
//         // Aquí puedes filtrar los productos por categoría
//         if (categoria) {
//             const productosFiltrados = getCategoria(categoria);
//             console.log("Productos filtrados:", productosFiltrados);
//             setProductos(productosFiltrados);
//         } else {
//             // Si no hay categoría, carga todos los productos
//             getProductos(productos);
//         }
//     }, [categoria]);

//     return (
//         <div>
//         <h2>{categoria ? `Productos de ${categoria}` : 'Todos los Productos'}</h2>
//         <section>
//             {productos.map((producto) => (
//                 <ProductCard key={producto.id} producto={producto} />
//             ))}
//         </section>
//     </div>
//     );
// };

// export default ItemListContainer

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoria, getProductos } from '../asyncMock';
import ProductCard from './ProductCard';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const { categoria } = useParams(); // Asegúrate de que esto sea correcto
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = categoria ? await getCategoria(categoria) : await getProductos();
                setProductos(data);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setError("Error al cargar productos. Intenta de nuevo más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [categoria]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>{categoria ? `Productos de ${categoria}` : 'Todos los Productos'}</h2>
            <section className="product-list">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </section>
        </div>
    );
};

export default ItemListContainer;
