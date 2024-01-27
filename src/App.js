import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import CollegeProfile from './Pages/CollegeProfile';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden">

      <Routes>

        <Route path="/" element={<CollegeProfile />} />

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
