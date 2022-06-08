import './App.scss';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotImplemented from './Pages/PageNotImplemented';

function App() {
  
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/PageNotImplemented' element={<PageNotImplemented />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
