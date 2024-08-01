import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';

const App = () => (
  <Router>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/my-pokemon-list" element={<MyPokemonList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
