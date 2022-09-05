import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import ListBlog from "./components/Blog/ListBlog";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";
import ListeFormateur from "./components/ListeFormateur/ListeFormateur";
import ListeCandidat from "./components/ListeCandidat/ListeCandidat";
import ListeCourses from "./components/ListeCourses/ListeCourses";
import AddCourses from "./components/AddCourses/AddCourses"

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <List />
            </div>
          }
        />
        <Route
          path="/Home"
          element={
            <div>
              <NavBar />
              <List />
            </div>
          }
        />

        <Route
          path="/Login"
          element={
            <div>
              <NavBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/Register"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <Navigate to = "/dashboard" />
                ) : (
              
              <SignUp />
              )}
            </div>
            
          }
        />
        <Route
          path="/listeFormateur"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <ListeFormateur />
                ) : (
              
              <Login />
              )}
            </div>
            
          }
        />
         <Route
          path="/listeCandidat"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <ListeCandidat />
                ) : (
              
              <Login />
              )}
            </div>
            
          }
        />
        <Route
          path="/listecourses"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <ListeCourses />
                ) : (
              
              <Login />
              )}
            </div>
            
          }
        />
        <Route
          path="/AddCourses"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <AddCourses />
                ) : (
              
              <Login />
              )}
            </div>
            
          }
        />
        <Route
          path="/Blog"
          element={
            <div>
              <NavBar />
              <ListBlog />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <NavBar />
              <Contact />
            </div>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <PrivateRoute />
              )}
            </div>
          }
        />
        <Route
          path="/Profile"
          element={
            <div>
              {localStorage.getItem("token") ? (
                <Profile />
              ) : (
                <Navigate to = "/Dashboard" />
               )}
            </div>
          }
        />

        
      </Routes>
    </div>
  );
}

export default App;
