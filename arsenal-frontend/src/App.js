import './styles/App.css';
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'





function App() {
  return (
    <div>
      <main>
        <Route path="/" element={<Home />} />
      </main>
    </div>
  );
}

export default App;
