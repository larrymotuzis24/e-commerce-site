import { useContext } from "react";
import './categories-preview.styles.scss';
import { CategoriesContext } from "../../../contexts/categories.context";

import CategoryPreview from "../../category-preview/category-preview-component";

const CategoriesPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext);


    return (
        <div className="categories-preview-container">
        {
            Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];

                return <CategoryPreview title={title} products={products}/>
            })
        }
            
        </div>

    )
};

export default CategoriesPreview;