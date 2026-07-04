import { AcademicApproach } from './components/AcademicApproach'
import { AcademicHero } from './components/AcademicHero'
import { Artifacts } from './components/Artifacts'
import { Demonstration } from './components/Demonstration'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Motivation } from './components/Motivation'
import { Results } from './components/Results'

function App() {
  return (
    <>
      <Header />
      <main>
        <AcademicHero />
        <Motivation />
        <AcademicApproach />
        <Results />
        <Demonstration />
        <Artifacts />
      </main>
      <Footer />
    </>
  )
}

export default App
