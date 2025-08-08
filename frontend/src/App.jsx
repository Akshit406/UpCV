// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AnalyzePage from './pages/AnalyzePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // Add this import

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}