import Summary from './Components/Summary'
import './App.css';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/summary' element={<Summary />} />
    </Routes>
  );
}

export default App;
