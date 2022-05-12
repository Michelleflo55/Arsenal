import './styles/App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home'





function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [player, setPlayer] = useState(null)
  return (
    <div>
      <main >
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
       </main>
    </div>
  );
}

export default App;
