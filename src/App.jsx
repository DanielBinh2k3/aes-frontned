// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EssayScoring from "./components/EssayScoring/EssayScoring";
import Home from "./components/Home/Home";
import SamplePage from "./components/Sample/SamplePage";
import NotFound404ErrorPage from "./components/404Page/404Page";
import ButtonToTop from "./components/ButtonToTop";
import LatestTopicPage from "./components/Topic/LatestTopicPage";
import BandPage from "./components/Sample/BandPage";
import DetailPage from "./components/DetailPage/DetailPage";
import Header from "./components/Elements/Common/Header";
import Footer from "./components/Elements/Common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicPage from "./components/Topic/TopicPage";
import SearchPage from "./components/Search/SearchPage";
import LoginPage from "./components/Account/LoginPage";
import TestPage from "./components/Account/TestPage";
// import RegisterPage from "./components/Account/RegisterPage";
import ResetPassPage from "./components/Account/ResetPassPage";
import PaymentPage from "./components/Pricing/PaymentPage";
import PricingPage from "./components/Pricing/PricingPage";
import Chatbot from "./components/Chatbot/Chatbot";
import ProfileScreen from "./components/Account/ProfileScreen";
import { useState } from "react";
import { useSelector } from "react-redux";
import Notification from "./components/Elements/Common/Notification";
import ProtectedRoute from "./components/Account/ProtectedRoute";
import RegisterPage from "./components/Account/RegisterPage";


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          {/* Account */}
          <Route element={<ProtectedRoute />}>
            <Route path='/user-profile' element={<ProfileScreen />} />
          </Route>
          <Route path="/reset-password" element={<ResetPassPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Pricing */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/check-essay" element={<EssayScoring />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/ielts-writing-samples" element={<SamplePage />} />
          <Route path="/latest-topic" element={<LatestTopicPage />} />
          <Route path="/band/:bandId/:pageNumber" element={<BandPage />} />
          <Route path="/text/:idSlug" element={<DetailPage />} />
          <Route path="/ielts-writing-task-2-topics/topic/:tag" element={<TopicPage />} />
          <Route path="/search/:searchText/:page" element={<SearchPage />} />
          <Route path="*" element={<NotFound404ErrorPage />} />
        </Routes>
        <ButtonToTop />
        <Chatbot />
        <Footer />
      </Router>
    </>
  );
}

export default App;
