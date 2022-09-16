import './App.css';
import React from 'react';
import { ThemeContext } from './Context/theme';
import Aos from 'aos';
import { Header } from './Components/Header/Header';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import GitHub from './Components/GitHub/GitHub';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import { Footer } from './Components/Footer/Footer';
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop';



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
        <section id="#projects">
          <Projects />
        </section>
        <br />
        <section>
        <GitHub />
        </section>
        <section id="#contact">
          <GetInTouch />
        
        </section>
        </main>
        <Footer />
        <ScrollToTop />
        

    </div>
  );
}

export default App;
