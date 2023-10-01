import React, { useState } from 'react';
import { AdvancedChart } from "react-tradingview-embed";

const Trade = () => {

    const [rangeval, setRangeval] = useState(null);

    return (
        <main>
            <section className='trade'>
                <div className='px-3'>
                    <div className='row'>
                        <div className='col-lg-9 p-0'>
                            <div>
                                <AdvancedChart widgetProps={{ "backgroundColor": "rgba(0, 0, 0, 1)", "height": "500" }} />
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
                                        <button className='btn btn-primary btn-block'>Connect Wallet</button>
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