import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  {/* The app contains the routes to all the pages in the website. The navigation is handle by the navbar component. Each
  route has a prop that contains its corresponding page */}
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App