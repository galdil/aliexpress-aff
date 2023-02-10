import ProductList from './productsList';
import Product from './Product';

import './products.css';

const Products = (): JSX.Element => (
  <div className="products-container">
    {ProductList.map((p) => <Product img={p.img} title={p.title} link={p.link} key={p.id} />)}
  </div>
);

export default Products;
