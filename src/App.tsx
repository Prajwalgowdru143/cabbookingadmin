import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Drivers from './pages/drivers';
import Trips from './pages/trips';





function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;