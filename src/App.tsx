import ScrollAnimation from 'react-animate-on-scroll';

import './App.css'

import { Head } from './components/Head'
import { Repo } from './components/Repo'

function App() {
  return (
    <div className="App">
      <Head name='kizune' bg='https://picsum.photos/1920/1080' />

      <ScrollAnimation animateIn="fadeIn">
        <Repo />
      </ScrollAnimation>
    </div>
  )
}

export default App