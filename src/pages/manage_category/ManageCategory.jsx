import "./ManageCategory.css";
import CategoryList from "../../components/CategoryList/CategoryList";
import CategoryForm from "../../components/CategoryForm/CategoryForm";

const ManageCategory = () => {
  return (
    <div className="category-container text-light">
      <div className="left-column">
        <CategoryForm></CategoryForm>
      </div>
      <div className="right-column">
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default ManageCategory;
