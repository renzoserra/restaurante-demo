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
<section className="section-carousel">
  <Header />
  </section>
  <section className="section-carousel">
  <Carousel />
  </section>
  <section className=".section-footer">
  <Footer />
  </section>
</div>
    </>
  )
}

export default App
