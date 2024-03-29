import { TypeAnimation } from 'react-type-animation';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import PortfolioContainer from './components/PortfolioContainer';
import portfolioData from './portfolioData.json';
import { ReactComponent as Mercury } from './assets/planet-mercury.svg';
import { ReactComponent as Venus } from './assets/planet-venus.svg';
import { ReactComponent as Earth } from './assets/planet-earth.svg';
import { ReactComponent as Mars } from './assets/planet-mars.svg';
import { ReactComponent as Rocket } from './assets/rocket-ship.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import { ReactComponent as GitHub } from './assets/github.svg';
function App() {
  return (
    <div className='App'>
      <ParticleBackground />
      <div className='z-10'>
        <div className='mt-8 mb-20 w-full h-screen flex flex-col justify-between items-center'>
          <div className='flex flex-row justify-end items-start w-full'>

            <a target="_blank" href='https://www.linkedin.com/in/rishi-s-patel'> <LinkedIn className='h-10 w-10 mr-4 hover:scale-105 hover:cursor-pointer' /></a>
            <a target="_blank" href='https://github.com/rishi517'> <GitHub className='h-10 w-10 mr-4 hover:scale-105 hover:cursor-pointer' /></a>
        
            
          </div>

          <div className='h-3/4 w-full flex-col items-center mt-10'>
            <h1 className='text-8xl text-[#b9c1c4] font-sans'>
              <div className=' flex flex-row justify-start w-full pl-10 text-left'>
                Hey, I'm Rishi. <br />
              </div>


              <div className='flex flex-row justify-start w-full pl-10'>
                <div className=''>I love to&nbsp;</div>
                <div id="type-animation" >

                  <TypeAnimation
                    sequence={[
                      () => {
                        document.getElementById('type-animation').onmouseover = () => {
                          document.getElementById('type-animation').style.color = '#FFF7D6';
                        };
                        document.getElementById('type-animation').onmouseout = () => {
                          document.getElementById('type-animation').style.color = '#b9c1c4';
                        };
                      },
                      ' explore.',
                      2000,
                      () => {
                        document.getElementById('type-animation').onmouseover = () => {
                          document.getElementById('type-animation').style.color = '#F0B6D5';
                        };
                        document.getElementById('type-animation').onmouseout = () => {
                          document.getElementById('type-animation').style.color = '#b9c1c4';
                        };
                      },
                      ' design.',
                      2000,
                      () => {
                        document.getElementById('type-animation').onmouseover = () => {
                          document.getElementById('type-animation').style.color = '#85D67E';
                        };
                        document.getElementById('type-animation').onmouseout = () => {
                          document.getElementById('type-animation').style.color = '#b9c1c4';
                        };
                      },
                      ' build.',
                      2000,
                      () => {
                        document.getElementById('type-animation').onmouseover = () => {
                          document.getElementById('type-animation').style.color = '#9DABCF';
                        };
                        document.getElementById('type-animation').onmouseout = () => {
                          document.getElementById('type-animation').style.color = '#b9c1c4';
                        };
                      },
                      ' deconstruct.',
                      2000,

                    ]}
                    wrapper="div"
                    cursor={true}
                    cursorStyle="_"
                    repeat={Infinity}
                    style={{ fontSize: '' }}
                  />

                </div>
              </div>

            </h1>
            <div className='text-4xl text-[#b9c1c4] font-sans flex flex-col justify-end items-center mt-10 w-full'>
              <div className='w-auto '>
                <p> Let's go on a journey together </p>
                <div className='flex flex-row justify-center mt-8'>
                  <button id="search-button" onClick={() => { window.location.href = "#content" }}>
                    <div className='rotate-180' id="rocketDiv">
                      <Rocket id="rocket" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/4 flex-col justify-start items-center'>

          </div>
        </div>
        <div id='content' className='flex flex-col justify-center items-center'>
          <PortfolioContainer planetRight={true} planet={<Venus />} portfolio={portfolioData[0]} />
          <PortfolioContainer planetRight={false} planet={<Mars />} portfolio={portfolioData[1]} />
          <PortfolioContainer planetRight={true} planet={<Mercury />} portfolio={portfolioData[2]} />
        </div>
      </div>
    </div>
  );
}

export default App;
