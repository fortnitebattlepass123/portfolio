
import React from 'react';
import { useCallback } from 'react';

const Planet = (props) => {
    console.log(props.planet.url);
    return (
        <div className='flex basis-1/2 flex-row justify-center scale-50'>
            {props.planet}

        </div>
       );

    }
   
   
  
  export default Planet;