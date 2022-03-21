import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./components/Home";
import Header from "./components/Header";
// import UsersPage from "./components/UsersPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CategoriesPage from "./components/CategoriesPage";
import ReviewsPage from "./components/ReviewsPage";
import SingleReview from "./components/SingleReview";
import SingleCategory from "./components/SingleCategory";
import CommentsList from "./components/CommentsList";
// import SingleUser from "./components/SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewsPage />} />
        {/* <Route path="/users" elememt={<UsersPage />} /> */}
        {/* <Route path="/users/:username" element={<SingleUser />} /> */}
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/categories/:category" element={<SingleCategory />} />
        <Route path="/reviews/:review_id/comments" element={<CommentsList />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
