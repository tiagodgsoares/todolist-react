import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/register' element={<Auth isRegistered={false} />} />
          <Route path='/login' element={<Auth isRegistered={true} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;