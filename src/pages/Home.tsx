import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Carousel.css'
import '../styles/globals.css'

export default function Home() {
  return (
    <div className="app-background">
      <header className="section-header">
        <Header />
      </header>
      <section className="section-carousel">
        <Carousel />
      </section>
      <footer className="section-footer">
        <Footer />
      </footer>
    </div>
  )
}
