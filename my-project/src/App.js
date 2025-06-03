import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <p>Teste</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;