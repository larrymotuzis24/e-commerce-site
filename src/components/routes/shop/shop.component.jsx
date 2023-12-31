import CategoriesPreview from "../categories-preview/categories-preview-component";
import CategoryComponent from "../category/category-component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { fetchCategoriesAsync, fetchCategoriesStart} from "../../../store/categories/category.action";
import { useDispatch } from "react-redux";





const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  })
    


    return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path=":category" element={ <CategoryComponent />} />
      </Routes>

    )
};

export default Shop