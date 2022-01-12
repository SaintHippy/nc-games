import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import UserList from "./components/UsersList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" elememt={<UserList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_name" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
