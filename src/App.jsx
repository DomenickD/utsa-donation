import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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
    </>
  )
}
