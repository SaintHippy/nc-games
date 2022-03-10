import ReviewsList from "./ReviewsList";
import CategoryList from "./CategoriesList";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="pageWholeBody">
      <div className="titleBar">
        <h1 className="titleText">Hub</h1>
      </div>
      <div className="mainBody">
        <div className="Box">
          <CategoryList />
        </div>
        <div className="Box">
          <ReviewsList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
