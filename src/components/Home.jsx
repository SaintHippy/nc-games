import ReviewsList from "./ReviewsList";
import CategoriesList from "./CategoriesList";

const HomePage = () => {
  return (
    <div className="">
      <div className="titleBar">
        <h1 className="titleText">Hub</h1>
      </div>
      <div className="mainBody">
        <div className="Box">
          <ReviewsList />
        </div>
        <div className="Box">
          <CategoriesList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
