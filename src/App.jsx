
import { Header } from './layout/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { RickAndMorty } from './pages/RickAndMorty/RickAndMorty'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<RickAndMorty />} />
        <Route path='/Cats' element={<RickAndMorty />} />
        <Route path='/Gifs' element={<RickAndMorty />} />
      </Routes>
    </>
  )
}
