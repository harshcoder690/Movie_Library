import logo from './logo.svg';
import { Main } from './components/Main';
import { Routing } from './components/routes/AppRouter';
import './App.css';
import { AuthProvider } from './contexts/Authcontext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
           <Routing/>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
