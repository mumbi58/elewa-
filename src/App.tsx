import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About/about";
import Invest from './invest/invest';
const App = () => {
  return (  
    <div className="app">
      <Router>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/invest" element={<Invest />} />


        </Routes>
      </Router>

    </div>
  );
}
 
export default App;