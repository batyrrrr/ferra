import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/home/Home';
import FirstPage from './screens/firstPage/FirstPage';
import Tank from './screens/tank/Tank';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/ferra/Home/' element={<Home />} />
          <Route path='ferra/' element={<FirstPage />} />
          <Route path='/Tank' element={<Tank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
