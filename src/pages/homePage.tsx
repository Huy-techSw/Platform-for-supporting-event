import Benefits from "../components/benefits";
import FeatureShowcase from "../components/featureShowcase";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ThemeProvider from "../components/themeProvider";


export default function HomePage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <Hero />
        <FeatureShowcase />
        <Benefits />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

