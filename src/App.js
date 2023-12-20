import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fight } from './pages/Fight';
import { Main } from './pages/Main';
import { Select } from './pages/Select';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </Router>
  );
}

export default App;
