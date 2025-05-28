import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import UsersPage from "./pages/UsersPage";

function App() {


  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/usuarios" element={<UsersPage />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
