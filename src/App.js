import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CategoriesPage from "./components/CategoriesPage";
import ReviewsPage from "./components/ReviewsPage";
import SingleReview from "./components/SingleReview";
import SingleCategory from "./components/SingleCategory";
import CommentsList from "./components/CommentsList";

// import UsersPage from "./components/UsersPage";
// import SingleUser from "./components/SingleUser";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/categories/:category" element={<SingleCategory />} />
          <Route path="/reviews/:review_id/comments" element={<CommentsList />} />
          <Route path="/categories" element={<CategoriesPage />} />
          {/* <Route path="/users" elememt={<UsersPage />} /> */}
          {/* <Route path="/users/:username" element={<SingleUser />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
