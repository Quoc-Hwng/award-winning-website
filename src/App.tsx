import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}
