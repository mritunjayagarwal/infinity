import React, { useState } from 'react';
import { AdvancedChart } from "react-tradingview-embed";

const Trade = () => {

    const [rangeval, setRangeval] = useState(null);

    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a className="navbar-brand" href="/"><img src={require('./Img/logo.png')} style={{ "width": "80px" }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Trade <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/swap">Liquidity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Stake</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Leaderboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Redeem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Stats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Referral</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trade">Ecosystem</a>
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='trade'>
                <div className='px-3'>
                    <div className='row'>
                        <div className='col-lg-9 p-0'>
                            <div>
                                <AdvancedChart widgetProps={{ "backgroundColor": "rgba(0, 0, 0, 1)", "height": "500" }} />
                            </div>
                            <div className=''>
                                <div className='d-flex justify-content-between px-3 py-2' style = {{marginBottom: "-20px"}}>
                                    <div className=''>
                                        <ul class="list-inline">
                                            <li class="list-inline-item mr-3 text-white" style = {{"fontSize": "13px"}}>Positions</li>
                                            <li class="list-inline-item mr-3" style = {{color: "#808080", "fontSize": "13px"}}>Open Orders</li>
                                            <li class="list-inline-item mr-3" style = {{color: "#808080", "fontSize": "13px"}}>Trades</li>
                                        </ul>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='switch mr-1' style = {{"margin-top": "3px", fontSize: "12px"}}>Aggregated Display</p>
                                        <p className='switch' style = {{"margin-top": "0px"}}><input type="checkbox" id="switch" /><label for="switch">Toggle</label></p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between px-3 mt-0'>
                                    <p style = {{fontSize: "14px"}}>Market</p>
                                    <p style = {{fontSize: "14px"}}>Size</p>
                                    <p style = {{fontSize: "14px"}}>Net Value</p>
                                    <p style = {{fontSize: "14px"}}>Collateral</p>
                                    <p style = {{fontSize: "14px"}}>Entry Price</p>
                                    <p style = {{fontSize: "14px"}}>Index Price</p>
                                </div>
                                <div className='my-5'>
                                    <h2 className='text-center connect-wallet-para'>Please connect your wallet.</h2>
                                    <p className='text-center'><button className='btn wallet-connect-btn'>Connect Wallet</button></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 p-0'>
                            <div className='trade-main py-2'>
                                <div className='d-flex p-2'>
                                    <div className='trade-input m-1' style={{ "flex": 1 }}>
                                        <h6>Market Price</h6>
                                        <p>1456</p>
                                    </div>
                                    <div className='trade-input m-1' style={{ "flex": 1 }}>
                                        <h6>Market</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div role="separator" className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='trade-input m-1'>
                                        <h6>Market Price</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div role="separator" className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='trade-input m-1'>
                                        <h6>Market Price</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div role="separator" className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <input type="text" className='range-input' value={rangeval} onChange={(event) => setRangeval(event.target.value)} />
                                        <div class="range" style={{ "--step": 25, "--min": 0, "--max": 100 }}>
                                            <input type="range" min="0" max="100" onChange={(event) => setRangeval(event.target.value)} value={rangeval} />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <button className='btn wallet-connect-btn btn-block'>Connect Wallet</button>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>Available Liquidity</p>
                                            </div>
                                            <div>
                                                <p>17,828.6975 ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Trade