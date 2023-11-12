import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import selectCategoriesMap from "../../../store/categories/category.selector";
import ProductCard from "../../product-card/product-card.component";
import {CategoryContainer, Title } from './category-component.styles.jsx';

const CategoryComponent = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const [ products, setProducts ] = useState(categoriesMap[category]);

useEffect(() => {
    setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

    return (
        <>
        <Title> {category.toLocaleUpperCase()} </Title>
        <CategoryContainer>
            {   products &&
                products.map((product) => 
                    <ProductCard key={product.id} product={product}/>
                )
            }
        </CategoryContainer>
        </>
    )
};

export default CategoryComponent;