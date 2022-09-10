
import './App.css';
import React from 'react';
import { ThemeContext } from './Context/theme';
import Aos from 'aos';
import { Header } from './Components/Header/Header';
import { About } from './Components/About/About';

function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        </main>

    </div>
  );
}

export default App;
