//tạm thời đây là nơi coi như là bọc cái header footer

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "./homepage";

export default function HomePage() {
  return (
    <div>
      <Header />

      <main className="">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
