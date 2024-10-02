import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/pages/homePage'
import SearchListPage from './Components/pages/searchResults'

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
