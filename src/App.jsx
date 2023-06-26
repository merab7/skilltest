import React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from './components/History';
import Team from './components/Team';
import Home from './components/Home';
import Layout from './components/Layout';
import Mountain1 from './components/Mountain1';
import Mountain2 from './components/Mountain2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Team />}>
          <Route path="mountain1" element={<Mountain1 />} />
          <Route path="mountain2" element={<Mountain2 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
