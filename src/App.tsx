import About from './components/About'
import ColorTransitionComponent from './components/ColorTransitionComponent'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <ColorTransitionComponent />
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App
