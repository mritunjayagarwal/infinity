import { useState } from 'react';
import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { SwapWidget } from '@uniswap/widgets';
import Navbar from './components/Navbar';

const JsonRpcEndpoint = `https://mainnet.infura.io/v3/fa9d5dbaaaa741c2b3f37a1b2953c496`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);

function Swap() {

  const [account, setAccount] = useState({
    address: '',
    provider: provider
  });

  const [connected, setConnected] = useState(false);

  async function connectWallet() {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount({
        address: address[0],
        provider: ethereumProvider
      });

      setConnected(true)
    }
  }

  const theme = {
    primary: '#fff',
    secondary: '#fff',
    interactive: '#fff',
    container: '#040818',
    module: '#040818',
    accent: '#0054c2',
    outline: '#fff',
    dialog: '#040818',
    fontFamily: 'Manrope',
    borderRadius: 20
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div className='container'>
          <a className="navbar-brand" href="/"><img src={require('./Img/logo.png')} style={{ "width": "80px" }} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/swap">Swap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/trade">Trade</a>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div>
                    <button onClick={connectWallet}>{connected ? 'Wallet Connected': 'Connect Wallet'}</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="Uniswap d-flex align-items-center justify-content-center">
        <div>
          <div className='section-heading' style={{ "margin-bottom": "20px" }}>Leverage Your Potential</div>
          <p className='text-center w-50 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis asperiores soluta, voluptas ipsa rerum eaque dignissimos</p>
          <div className='d-flex align-items-center justify-content-center mt-5'>
            <div className='swap-wrap'>
              <div>
                <SwapWidget
                  provider={account.provider}
                  JsonRpcEndpoint={JsonRpcEndpoint} width="100%" height="100%" theme={theme} hideConnectionUI = {true} />
              </div>
              {/* <div style = {{"position":"absolute", "background": "#000", "height": "20px", "width": "26vw", "bottom": "15px", "left": "20px"}}></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
