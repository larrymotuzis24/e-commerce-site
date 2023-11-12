import {DirectoryContainer} from "./directory.container.styles.jsx";
import DirectoryItem from "../../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, title, imageUrl }) => {
        return <DirectoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
