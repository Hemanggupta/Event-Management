import { Button } from 'primereact/button';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button
        label={`Clicked ${counter} times`}
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
      <ToastContainer position="bottom-right" autoClose={1000} theme="dark" newestOnTop />
    </>
  );
}

export default App;
