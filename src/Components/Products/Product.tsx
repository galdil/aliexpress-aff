const Product = ({ img, title, link }
: { img: string, title: string, link: string }): JSX.Element => (
  <div>
    <span>{title}</span>
    <img alt="product" src={img} />
    <a href={link}>Buy now</a>
  </div>
);

export default Product;
