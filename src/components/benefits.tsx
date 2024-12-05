import { motion } from 'framer-motion'

const benefits = [
    {
      title: 'Guests',
      features: ['View event list', 'Register account', 'See event attendance'],
    },
    {
      title: 'Members',
      features: ['Book tickets', 'Manage transactions', 'Event check-in/out', 'Provide feedback'],
    },
    {
      title: 'Organizers',
      features: ['Manage event info', 'View event statistics', 'Manage guest tables', 'QR code scanning'],
    },
    {
      title: 'Admins',
      features: ['Manage accounts', 'Oversee events', 'Handle transactions'],
    },
  ]

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Benefits for All Users
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
            <ul className="space-y-2">
              {benefit.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                  className="flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Benefits