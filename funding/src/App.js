import './App.css';

function App() {
  return (
    <div className="App">
      <header className="text-center bg-light py-2 border-bottom">
        <h3>Funding App</h3>
      </header>
      <section className='py-3 d-flex flex-column align-items-center'>
        <h4>Balance: 20ETH</h4>
        <span>Account: 0x000000000</span>
        <div className="mt-4 d-flex gap-3">
          <button className="btn btn-primary">Connect to metaMask</button>
          <button className="btn btn-success">Transfer</button>
          <button className="btn btn-success">Withdraw</button>
        </div>        
      </section>
      <footer className="py-2 bg-light text-center border-top ">
        Copyright 
      </footer>
    </div>
  );
}

export default App;
