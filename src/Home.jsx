import React from 'react';
import tokenomics from './components/Home/tokenomics';
import about from './components/Home/about';
import features from './components/Home/features';

const Home = () => {
  return (
    <main className="home-main">
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <h1 className='primary'>DECENTRALIZED SELF-CUSTODIAL LEVERAGED TRADING</h1>
                <h1>Supercharged for Traders</h1>
                <p>Trade crypto with zero price impact, up to 100x leverage and aggregated liquidity. MUX protocol takes care of all the hassles so that you can experience optimized DEX trading on our platform.</p>
                <button>Start Trading</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center'>Level Up Every Trade</h1>
          <div className='row'>
            {
              tokenomics.map((tokenomic) => {
                const { id, heading, description, image } = tokenomic;
                return (
                  <div className='col-lg-4' key={id}>
                    <img src={require(`./Img/home/${image}`)} alt="" />
                    <h1 className=''>{heading}</h1>
                    <p>{description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center'>All-In-One Leveraged Trading Platform</h1>
          <div>
            {
              about.map((item) => {
                const { id, heading, description, image } = item;
                return (
                  <div className="row" key={id}>
                    <div className={`col-lg-6 ${heading === 'Smart Position Routing' ? 'order-md-2' : ''}`}>
                      <h1>{heading}</h1>
                      <p>{description}</p>
                    </div>
                    <div className='col-lg-6'>
                      <img src={require(`./Img/home/About/${image}`)} alt="" />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="features-main">
        <div className='features'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <img src={require('./Img/home/feature/feature-main.png')} className='img-fluid' alt="" />
              </div>
              <div className='col-lg-8 order-md-2'>
                <div className='features-wrapper'>
                  <h1>New Technology Behind Every Feature</h1>
                  <div className='row'>
                    {
                      features.map((feature) => {
                        const { id, heading, description, image } = feature;
                        return (
                          <div className='col-lg-6' key={id}>
                            <img src={require(`./Img/home/feature/${image}`)} alt="" />
                            <h1>{heading}</h1>
                            <p>{description}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-3 border'>
              <div>
                <img src={require('./Img/home/advanced/1.svg')} alt="" />
                <h1>Trade</h1>
                <p>Open long or short positions with up to 100x leverage and 0% price impact</p>
              </div>
            </div>
            <div className='col-lg-3 border'>
              <div>
                <img src={require('./Img/home/advanced/1.svg')} alt="" />
                <h1>Trade</h1>
                <p>Open long or short positions with up to 100x leverage and 0% price impact</p>
              </div>
            </div>
            <div className='col-lg-3 border'>
              <div>
                <img src={require('./Img/home/advanced/1.svg')} alt="" />
                <h1>Trade</h1>
                <p>Open long or short positions with up to 100x leverage and 0% price impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center'>Backers</h1>
          <div className='row mt-5'>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
            <div className='col-lg-3'>
              <img src={require('./Img/home/backers/1.png')} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home