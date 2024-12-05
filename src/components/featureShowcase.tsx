import { motion } from 'framer-motion'
import { useState } from 'react'

const FeatureShowcase = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null)

  const seats = [
    { id: 'A1', x: 20, y: 20 },
    { id: 'A2', x: 60, y: 20 },
    { id: 'B1', x: 20, y: 60 },
    { id: 'B2', x: 60, y: 60 },
  ]
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Interactive Event Layout Designer
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Event Layout</h3>
            <div className="relative w-full h-64 bg-white dark:bg-gray-600 rounded-md">
              {seats.map((seat) => (
                <motion.div
                  key={seat.id}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    selectedSeat === seat.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-500'
                  }`}
                  style={{ left: `${seat.x}%`, top: `${seat.y}%` }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedSeat(seat.id)}
                >
                  {seat.id}
                </motion.div>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gray-400 dark:bg-gray-300" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Organizers design custom event layouts
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Members view interactive seating charts
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Easy seat selection and booking
            </li>
          </ul>
          <p className="mt-4">
            Selected Seat: {selectedSeat ? <strong>{selectedSeat}</strong> : 'None'}
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default FeatureShowcase