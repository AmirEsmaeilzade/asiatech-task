import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/homePage'
import SearchListPage from './components/pages/searchResults'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<SearchListPage />} />
      </Routes>
    </>
  )
}

export default App
