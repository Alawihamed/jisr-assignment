import { useEffect, useState } from 'react';
import Toast from './components/Toast/Toast';

function App() {
  const [openToast, setOpenToast] = useState<boolean>(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setOpenToast(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    }
  }, [openToast, setOpenToast]);

  return (
    <div className="app">
      <h3>Toast</h3>
      <p>Notification message or a piece of information displayed above the page content.</p>
      <button className='click-me' onClick={() => setOpenToast(true)}>click me</button>
      <Toast
        open={openToast}
        title='Toast title'
        message='Long details go here after the title, long details go here after the title'
        postion="top-right"
        onConfirm={() => console.log('Confirm')}
        onCancel={() => setOpenToast(false)}
      />
    </div>
  );
}

export default App;
