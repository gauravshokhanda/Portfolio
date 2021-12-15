import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">MY Portfolio</h1>
        <p className="pl-desc">
         My Projects which i made in react js!
        </p>
        <p className="pl-desc">
         Click on the  Project to live Demo !Hover to know the name 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;