import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Authorized from './Pages/Authorized/Authorized';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useRef(true);
  const isDarkMode = useRef(true);

  if (isDarkMode.current) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }

  return (
    <>
      <Authorized isLoggedIn={isLoggedIn.current} />
      <ToastContainer position="bottom-right" autoClose={1000} theme={isDarkMode.current ? 'dark' : 'light'} newestOnTop />
    </>
  );
}

export default App;
