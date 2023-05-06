import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/home/Home';
import FirstPage from './screens/firstPage/FirstPage';
import Tank from './screens/tank/Tank';
import Vertolet from './screens/Vertolet';
import Deltoplan from './screens/Deltoplan';
import Velo from './screens/Velo';
import Radio from './screens/Radio';
import Shve from './screens/Shve';
import Rengen from './screens/Rengen';
import Tele from './screens/Tele';
import Arbalet from './screens/Arbalet';
import Parovaya from './screens/Parovaya';
import Grech from './screens/Grech';
import Damas from './screens/Damas';
import Prozh from './screens/Prozh';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/ferra/Home/' element={<Home />} />
          <Route path='ferra/' element={<FirstPage />} />
          <Route path='/Tank' element={<Tank />} />
          <Route path='/Vert' element={<Vertolet />} />
          <Route path='/Delt' element={<Deltoplan />} />
          <Route path='/Velo' element={<Velo />} />
          <Route path='/Radio' element={<Radio />} />
          <Route path='/Shve' element={<Shve />} />
          <Route path='/Rentgen' element={<Rengen />} />
          <Route path='/Tele' element={<Tele />} />
          <Route path='/Arba' element={<Arbalet />} />
          <Route path='/Paro' element={<Parovaya />} />
          <Route path='/Grech' element={<Grech />} />
          <Route path='/Damas' element={<Damas />} />
          <Route path='/Prozh' element={<Prozh />} />

          /Vert
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
