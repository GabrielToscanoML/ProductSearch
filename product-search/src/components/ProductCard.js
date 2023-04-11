import '../styles/productCard.css';
export default function ProductCard({ product }) {

  return (
    <div className="productCardItem">
      <img src={ product.thumbnail } alt={ product.title } />
      <section className='titleAndPrice'>
        <p>{ product.title }</p>
        <p>Description</p>
        <p>R$ { product.price }</p>
      </section>
      <a
        href={product.permalink}
        rel='noreferrer'
        target='_blank'
        className='webLink'
      >
        <button>Ir a Web</button>
      </a>
      
    </div>
  );
}
