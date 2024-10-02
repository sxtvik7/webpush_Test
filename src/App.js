import { useEffect } from 'react';
import './App.css';
import { generateToken, messaging} from './notification/firebase';
import { onMessage } from 'firebase/messaging';

function App() {

  useEffect(()=>{
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Helllo World! Webpush 2
      </header>
    </div>
  );
}

export default App;
