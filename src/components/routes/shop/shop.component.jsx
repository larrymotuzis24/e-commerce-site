import CategoriesPreview from "../categories-preview/categories-preview-component";
import CategoryComponent from "../category/category-component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../../store/categories/category.action";



const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async() => {
      const categoryMap = await getCategoriesAndDocuments();
       dispatch(setCategoriesMap(categoryMap));
  };
  getCategoriesMap()
  })
    


    return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path=":category" element={ <CategoryComponent />} />
      </Routes>

    )
};

export default Shop