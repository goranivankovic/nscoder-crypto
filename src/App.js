import Buy from './components/Buy/Buy';
import Crypto from './components/Crypto.js/Crypto';
import Footer from './components/Footer.js/Footer';
import Get from './components/Get/Get';
import Home from './components/Home/Home';
import More from './components/More/More';
import Nav from './components/Nav/Nav';
import logo from './logo.svg';


function App() {
  return (
    <div>
     
      <Nav />
      <More />
      <Buy />
      <Get />
      <Crypto />
      <Footer />
    </div>
  );
}

export default App;
