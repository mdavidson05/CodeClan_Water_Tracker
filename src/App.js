import { useState } from 'react';
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Dark/Light</button>
      
      <MainPage />
    </div>

    
  );
}

export default App;
