import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import TreeMap from './pages/TreeMap';
import Inventory from './pages/Inventory';
import WorkOrders from './pages/WorkOrders';
import Clients from './pages/Clients';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<TreeMap />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/work-orders" element={<WorkOrders />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;