import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Ingredientes from './components/Ingredientes'
import Reposteria from './components/Reposteria'
import Bebidas from './components/Bebidas'
import Ocasiones from './components/Ocasiones'
import Permanencia from './components/Permanencia'
import Conclusiones from './components/Conclusiones'
import Participa from './components/Participa'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Ingredientes />
        <Reposteria />
        <Bebidas />
        <Ocasiones />
        <Permanencia />
        <Conclusiones />
        <Participa />
      </main>
      <Footer />
    </>
  )
}
