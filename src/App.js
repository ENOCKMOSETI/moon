import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import phone from './assets/hPhone.png';
import trustpilot from './assets/t.png';

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className='tex'>
          <h1>Crypto just got easy</h1>
          <p>A fast and simple way to buy and sell crypto</p>
          <button>Buy crypto</button>
          <div className='trust'>
            <p>Trusted by 5M+ <span className='green'>4.2/5 </span> <img src={trustpilot} alt='trust' width={60} height={20} /></p>
          </div>
        </div>
        <div className='imag'>
          <img src={phone} alt='Phone' width={500} height={500} />
        </div>
      </main>
      <section>
        <h2>Get Started</h2>
        <button>Buy Bitcoin</button>
        <button>Buy Ethereum</button>
        <button>Buy Tether</button>
        <button>Buy Litecoin</button>
        <button>Buy Binance Coin</button>
        <button>Buy Solana</button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
