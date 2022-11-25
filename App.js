import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Home from './src/screens/Home';
import Mount from './src/screens/Mount';
import Info from './src/screens/Info';
import Search from './src/screens/Search';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/montures" element={<Mount />} />
        <Route path="/search" element={<Search />} />
        <Route path="/infos" element={<Info />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
