import './App.css'

import { Head } from './components/Heading'
import { Repo } from './components/Repo'
import { Member } from './components/Member'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import background from './assets/bg.webp'

function App() {
  return (
    <div className="App">
      <Head bg={background} />
      <Repo />
      <Member />
      <Contact />
      <Footer />
    </div>
  )
}

export default App