// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CabinetPage from './pages/CabinetPage';
import MoneyPage from './pages/MoneyPage';
import HistoryPage from './pages/HistoryPage';
import HelpPage from './pages/HelpChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cabinet" element={<CabinetPage />} />
        <Route path="/money" element={<MoneyPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
