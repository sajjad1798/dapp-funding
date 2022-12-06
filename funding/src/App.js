
import {useState, useEffect} from 'react';
import Web3 from 'web3'
import './App.css';

function App() {
  const [web3Api , setWeb3Api] = useState({
    provider:null,
    web3:null,
  })

  const [accounts , setAccounts] = useState();
  const connectMetaMask = async () =>{
    const accounts = await window.ethereum.request({
      method:"eth_requestAccounts"
    })
  }
  useEffect(() => {
    const loadProvider = async () =>{
      let provider = null;
      if(window.ethereum){
        provider = window.ethereum;
        try {
          await provider.enable();
        } catch (error) {
          console.error("User is not Allowed")
        }
      }else if(window.web3){
          provider = window.web3.currentProvider;
      }else if(!process.env.production){
        provider = new Web3.provider.HTTpProvider("http://127.0.0.1:7545")
      }
      setWeb3Api({
        web3:new Web3(provider),
        provider:provider,
      })
    }
    loadProvider()

  }, [])

  useEffect(() => {

    const getAccount = async () =>{
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccounts(accounts[0]);
    } 
    web3Api.web3 && getAccount()
  }, [web3Api.web3])
  

  
  return (
    <div className="App">
      <header className="text-center bg-light py-2 border-bottom">
        <h3>Funding App</h3>
      </header>
      <section className='py-3 d-flex flex-column align-items-center'>
        <h4>Balance: 20ETH</h4>
        <span>Account: {accounts ? accounts : "Account not connected"}</span>
        <div className="mt-4 d-flex gap-2">
          <button className="btn btn-primary" onClick={() => connectMetaMask()}>Connect to metaMask</button>
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
