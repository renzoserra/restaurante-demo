import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Home from './pages/Home'
import './index.css'
import './styles/globals.css'


function App() {
  return (
    <>
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
    </>
  )
}

export default App
