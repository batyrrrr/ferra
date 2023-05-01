import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='ferra/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
