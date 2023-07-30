import React, { lazy, Suspense, startTransition } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

// Lazy load the Home component
const Home = lazy(() => import('./components/pages/home'));
const Login = lazy(() => import('./components/pages/login/Login'));
const Categories = lazy(() => import('./components/pages/category/Categories'));
const Labours = lazy(() => import('./components/pages/labour/Category'));
const Signup = lazy(() => import('./components/pages/signup/Signup'));
const ForgotPassword = lazy(() => import('./components/pages/forgot-password/ForgotPassword'));
const JobPost = lazy(() => import('./components/pages/job-post/JobPost'));
const Profile = lazy(() => import('./components/pages/profile/Profile'));
const ContactUs = lazy(() => import('./components/pages/contact-us/ContactUs'));
const Terms = lazy(() => import('./terms/Terms'));
const ProfileUpdate = lazy(() => import('./components/pages/profile-update/ProfileUpdate'));
const ChangePassword = lazy(() => import('./components/pages/change-password/ChangePassword'));

// Component to redirect to the Home page if the route doesn't match any other route
const RedirectComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    startTransition(() => {
      if (location.pathname !== '/') {
        navigate('/');
      }
    });
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        } />
        <Route path="/login" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        } />
        <Route path="/categories" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </Suspense>
        } />
        <Route path="/labours" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Labours />
          </Suspense>
        } />
        <Route path="/labours/:type" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Labours />
          </Suspense>
        } />
        <Route path="/signup" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        } />
        <Route path="/forgot-password" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <ForgotPassword />
          </Suspense>
        } />
        <Route path="/profile" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        } />
        <Route path="/profile/:type" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        } />
        <Route path="/profile-update" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileUpdate />
          </Suspense>
        } />
        <Route path="/terms" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Terms />
          </Suspense>
        } />
        <Route path="/contact-us" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </Suspense>
        } />
        <Route path="/change-password" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <ChangePassword />
          </Suspense>
        } />
        <Route path="*" exact element={<RedirectComponent />} />
        <Route path="/index" exact element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
