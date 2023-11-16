import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../../store/categories/category.selector";
import ProductCard from "../../product-card/product-card.component";
import {CategoryContainer, Title } from './category-component.styles.jsx';
import Spinner from "../../spinner/spinner.component";

const CategoryComponent = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [ products, setProducts ] = useState(categoriesMap[category]);

useEffect(() => {
    setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

    return (
        <Fragment>
        <Title> {category.toLocaleUpperCase()} </Title>
        {
            isLoading ? (<Spinner /> ):
       ( <CategoryContainer>
            {   products &&
                products.map((product) => 
                    <ProductCard key={product.id} product={product}/>
                )
            }
        </CategoryContainer>
       )
        }
        </Fragment>
    )
};

export default CategoryComponent;