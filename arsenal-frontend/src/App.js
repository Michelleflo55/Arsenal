import './styles/App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div >
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
