import './App.css';
import Pages from './components/pages/Pages';
import { useEffect } from 'react';

import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  //aos
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
