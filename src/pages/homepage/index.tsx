import Benefits from "./components/Benefits";
import FeatureShowcase from "./components/FeatureShowcase";
import Hero from "./components/Hero";



export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <Hero />
        <FeatureShowcase />
        <Benefits />
      </main>
  )
}

