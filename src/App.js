import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ShowScreen from './components/ShowScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} ></Route>
        <Route exact path="/show/:id" element={<ShowScreen />}></Route>

      </Routes>
 
  </Router>
  );
}

export default App;
