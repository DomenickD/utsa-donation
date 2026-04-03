import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BuildingsPage from './pages/BuildingsPage'
import BuildingDetailPage from './pages/BuildingDetailPage'
import ZoneDetailPage from './pages/ZoneDetailPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BuildingsPage />} />
        <Route path="/buildings/:id" element={<BuildingDetailPage />} />
        <Route path="/buildings/:id/zones/:zoneId" element={<ZoneDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}
