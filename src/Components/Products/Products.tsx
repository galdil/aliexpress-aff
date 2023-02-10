import ProductList from './productsList';
import Product from './Product';

const Products = (): JSX.Element => (
  <>
    {ProductList.map((p) => <Product img={p.img} title={p.title} link={p.link} key={p.id} />)}
  </>
);

export default Products;
