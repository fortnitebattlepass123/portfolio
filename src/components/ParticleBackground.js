
import React from 'react';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

    return (
      <div id='particle-background'>
       <Particles className='fixed w-full -z-10'
      id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#182030",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 5,
              },
            },
          },
          particles: {
            color: {
              value: ["#b9c1c4", "#bbc0c2"],
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "bottomLeft",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
              sides: 5,
              inset: 10,
            },
            size: {
              value: { min: 3, max: 4.5 },
            },
          },
          detectRetina: true,
        }}
      hi
      />
      </div>
    );
  };
  
  export default ParticleBackground;