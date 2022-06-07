import './App.scss';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
