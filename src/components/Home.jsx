import ArticlesList from "./ArticlesList";
import TopicList from "./TopicsList";
<link rel="stylesheet" href="../style/home.style.css" />;

const HomePage = () => {
  return (
    <>
      <h1 className="mainTitle"> News Hub</h1>
      <TopicList />
      <ArticlesList />
    </>
  );
};

export default HomePage;
