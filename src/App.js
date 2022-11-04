import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular';
import Battle from './components/Battle/Battle';
import NotFound from './components/General/NotFound';
import Nav from './components/General/Nav';
import Results from './components/Battle/Results';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='popular' element={<Popular />} />
          <Route path='battle' element={<Battle />} />
          <Route path='battle/results' element={<Results />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
