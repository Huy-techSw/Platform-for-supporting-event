
import { motion } from 'framer-motion'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  // Khi component mount, kiểm tra localStorage để xác định theme
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode) // Thêm lớp dark vào HTML nếu chế độ tối
  }, [])

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem('darkMode', newMode.toString()) // Lưu trạng thái vào localStorage
    document.documentElement.classList.toggle('dark', newMode) // Chuyển chế độ bằng cách thay đổi lớp
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
      <motion.button
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
      >
        {isDark ? '🌞' : '🌙'}
      </motion.button>
    </ThemeContext.Provider>
  )
}
