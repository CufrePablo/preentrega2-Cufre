import "./ProductCard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({producto})=>{
    return(
<article className="card">
    <h4>{producto.nombre}</h4>
    <img src={producto.imagen} alt="" />
    <p>$ {producto.precio}</p>
    <button>
          <Link to={`/producto/${producto.id}`}>Detalles</Link>
        </button>
</article>

    )
}

export default ProductCard