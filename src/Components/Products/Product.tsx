import './products.css';

const Product = ({ img, title, link }
: { img: string, title: string, link: string }): JSX.Element => (
  <div className="product-wrapper">
    <span>{title}</span>
    <a href={link}><img className="product-img" alt="product" src={img} /></a>
    <a className="cta" href={link}>Buy Now!</a>
  </div>
);

export default Product;
