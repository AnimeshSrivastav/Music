import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Coverpage from './components/Coverpage';
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={[ <Home />]} />
            <Route path="/playlist" element={[ <Playlist  />]} />
            <Route path="/search" element={[ <Search />]} />
            <Route path="/favourite" element={[ <Favourites />]} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
