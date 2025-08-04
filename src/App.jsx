import DashBoard from './pages/DashBoard'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashBoard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
