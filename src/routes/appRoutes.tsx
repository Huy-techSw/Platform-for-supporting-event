import { Route, Routes } from 'react-router-dom'
import ThemeProvider from '../components/themeProvider'
import HomePage from '../pages/homePage'

const AppRoutes = () => {
  return (
    <Routes>
      <ThemeProvider>
        <Route path="/" element={<HomePage/>} />
      </ThemeProvider>
    </Routes>
  )
}

export default AppRoutes