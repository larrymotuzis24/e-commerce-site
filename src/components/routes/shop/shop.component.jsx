import { useContext } from "react";
import './shop.styles.scss';
import { CategoriesContext } from "../../../contexts/categories.context";

import CategoriesPreview from "../categories-preview/categories-preview-component";
import CategoryComponent from "../category/category-component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {

    


    return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path=":category" element={ <CategoryComponent />} />
      </Routes>

    )
};

export default Shop