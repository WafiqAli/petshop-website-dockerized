import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotImplemented from './Pages/PageNotImplemented/PageNotImplemented';
import Footer from './components/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import SortedProductNames from './components/Week1Quicksort/SortedProductNames';

function App() {
  
  const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9001/products')
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
            })
            .then(data => {
            setProducts(data);
            console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/SortedProductNames' element={<SortedProductNames products={products}/>} />
          <Route path='/PageNotImplemented' element={<PageNotImplemented />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
