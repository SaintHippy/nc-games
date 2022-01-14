import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import UserList from "./components/UsersList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import "./App.css";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";
import CommentsList from "./components/CommentsList";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" elememt={<UserList />} />
        <Route path="/users/:username" element={<SingleUser />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:topic" element={<SingleTopic />} />
        <Route path="article/:article_id/comments" element={<CommentsList />} />
        <Route path="/topics" element={<TopicsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
