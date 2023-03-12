import ScrollAnimation from 'react-animate-on-scroll';

import './App.css'

import { Head, Repo, Member } from './component'

function App() {
  return (
    <div className="App">
      <Head name='kizune' bg='https://picsum.photos/1920/1080' />

      <ScrollAnimation animateIn="fadeIn">
        <Repo />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Member />
      </ScrollAnimation>
    </div>
  )
}

export default App