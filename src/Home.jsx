import React from 'react';
import tokenomics from './components/Home/tokenomics';
import about from './components/Home/about';
import features from './components/Home/features';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <main className="home-main">
      <section className="hero d-flex align-items-center">
        <div className="container" style = {{ marginTop: "-100px"}}>
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <h1 className='hero-highlight text-uppercase'>Decentralized Trading &amp; Aggregation Platform.</h1>
                <h1 className='hero-heading'>Dive into Deep Liquidity</h1>
                <p>Trade crypto seamlessly with zero price impact, up to 100x leverage, and combined liquidity. LQX protocol handles the complexities, ensuring you enjoy optimized DEX trading on our platform.</p>
                <button className='btn hero-btn'>Start Trading</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center section-heading'>Level Up Every Trade</h1>
          <div className='row d-flex justify-content-center'>
            {
              tokenomics.map((tokenomic) => {
                const { id, heading, description, image } = tokenomic;
                return (
                  <div className='col-lg-4 col-md-6 mt-4' key={id}>
                    <div className='tokenomic-item'>
                      <div className='tokenomic-image'>
                        <img src={require(`./Img/home/${image}`)} alt="" />
                      </div>
                      <div className='p-3'>
                      <h1 className='tokenomic-heading'>{heading}</h1>
                      <p className='tokenomic-para'>{description}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center section-heading'>Advanced Platform for Enhanced Leverage Trading.</h1>
          <div>
            {
              about.map((item) => {
                const { id, heading, description, image } = item;
                return (
                  <div className="row mt-5" key={id}>
                    <div className={`col-lg-6 col-md-6 d-flex align-items-center ${heading === 'Intelligent Position Allocation' ? 'order-md-2' : ''}`}>
                      <div>
                        <h1 class="about-heading">{heading}</h1>
                        <p className='about-para'>{description}</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 d-flex align-items-center'>
                      <img src={require(`./Img/home/About/${image}`)} className='img-fluid' alt="" />
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
              <div className='col-lg-4' style = {{"position": "relative"}}>
                <img src={require('./Img/home/feature/feature-main.png')} className='feature-image' alt="" />
              </div>
              <div className='col-lg-8 order-md-2'>
                <div className='features-wrapper'>
                  <h1 className='section-heading text-left mt-5'>Innovative Tech Powers Each Feature</h1>
                  <div className='row'>
                    {
                      features.map((feature) => {
                        const { id, heading, description, image } = feature;
                        return (
                          <div className='col-lg-6 col-md-6' key={id}>
                            <div className='feature-card'>
                              <img src={require(`./Img/home/feature/${image}`)} className = 'img-fluid mb-3' alt="" />
                              <h1 className='feature-heading mb-3'>{heading}</h1>
                              <p className='feature-para'>{description}</p>
                            </div>
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
            <div className='col-lg-4 col-md-6'>
              <div className = 'advanced-item'>
                <div className='advanced-image-wrapper'>
                  <img src={require('./Img/home/advanced/1.png')} alt="" />
                </div>
                <h1 className='advanced-heading'>Trade</h1>
                <p className='advanced-para'>Initiate long or short stances with up to 100x leverage without any price fluctuations.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className = 'advanced-item'>
                <div className='advanced-image-wrapper'>
                  <img src={require('./Img/home/advanced/2.png')} alt="" />
                </div>
                <h1 className='advanced-heading'>Boost Liquidity</h1>
                <p className='advanced-para'>Purchase and stake LQXLP to accumulate protocol revenue and LQX bonuses.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className = 'advanced-item'>
                <div className='advanced-image-wrapper'>
                  <img src={require('./Img/home/advanced/3.png')} alt="" />
                </div>
                <h1 className='advanced-heading'>Invest</h1>
                <p className='advanced-para'>Deposit mLQX &amp; LQX to be eligible for generating protocol earnings and LQX rewards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='text-center section-heading'>Integration with Leading DEX Swaps</h1>
          <div className='row mt-5'>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/1.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/2.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/3.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/4.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/5.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/6.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/7.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/8.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/9.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/10.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/11.png')} className = 'img-fluid' alt="" />
            </div>
            <div className='col-lg-3 col-md-4 col-6 text-center'>
              <img src={require('./Img/home/backers/12.png')} className = 'img-fluid' alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home