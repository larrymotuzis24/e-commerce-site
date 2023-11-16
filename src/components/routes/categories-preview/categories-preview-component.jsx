import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading} from "../../../store/categories/category.selector";

import CategoryPreview from "../../category-preview/category-preview-component";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap  = useSelector(selectCategoriesMap);


    return (
        <div className="categories-preview-container">
        {
            isLoading ? (<Spinner /> ):(
            Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];

                return <CategoryPreview  key={title} title={title} products={products}/>
            })
            )
        }
            
        </div>

    )
};

export default CategoriesPreview;