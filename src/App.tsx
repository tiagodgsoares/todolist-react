import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;