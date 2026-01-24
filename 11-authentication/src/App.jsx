import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import { UserProvider } from './userContext';
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default App;