import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import './category-component.styles.scss';

const CategoryComponent = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products, setProducts ] = useState(categoriesMap[category]);

useEffect(() => {
    setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

    return (
        <>
        <h2 className="category-title"> {category.toLocaleUpperCase()} </h2>
        <div className="category-container">
            {   products &&
                products.map((product) => 
                    <ProductCard key={product.id} product={product}/>
                )
            }
        </div>
        </>
    )
};

export default CategoryComponent;