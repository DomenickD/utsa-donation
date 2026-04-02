import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BuildingsPage from './pages/BuildingsPage'
import BuildingDetailPage from './pages/BuildingDetailPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BuildingsPage />} />
        <Route path="/buildings/:id" element={<BuildingDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}
