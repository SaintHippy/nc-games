import ArticlesList from "./ArticlesList";
import TopicList from "./TopicsList";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="pageWholeBody">
      <div className="titleBar">
        <h1 className="titleText">Hub</h1>
      </div>
      <div className="mainBody">
        <div className="Box">
          <TopicList />
        </div>
        <div className="Box">
          <ArticlesList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
