import "./directory.container.styles.scss";
import Categoryitem from "../../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => {
        return <Categoryitem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;
