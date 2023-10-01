import { useState } from 'react';
import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { SwapWidget } from '@uniswap/widgets'

const JsonRpcEndpoint = `https://mainnet.infura.io/v3/fa9d5dbaaaa741c2b3f37a1b2953c496`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);

function Swap() {

  const [account, setAccount] = useState({
    address: '',
    provider: provider
  })

  async function connectWallet() {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount({
        address: address[0],
        provider: ethereumProvider
      })
    }
  }

  return (
    <div>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
      <div className="Uniswap">
        <SwapWidget 
        provider={account.provider}
        JsonRpcEndpoint={JsonRpcEndpoint} />
      </div>
    </div>
  );
}

export default Swap;
