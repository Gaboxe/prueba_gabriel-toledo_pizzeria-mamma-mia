import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar'

import './App.css';

import Home from './views/Home'
import Pizzas from './views/Pizza';
import Carrito from './views/Carrito';
import NoMatch from './views/NoMatch';

import { MyContext } from './Context';

function App() {

  const [listPizzas, setPizzas] = useState('');

  const [statePizza, setStatePizza] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const endpoint = './pizzas.json'
    const response = await fetch(endpoint);
    const pizzas = await response.json();

    setPizzas(pizzas);
  }

  return (
    <div className="App">

      <MyContext.Provider value={{ listPizzas, statePizza, setStatePizza }}>

        <BrowserRouter>
          <MyNavbar />
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizzas />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </div>
  );
}

export default App;


/*
  corazon es lo mismo que agregar a favoritos agregar al carro
*/