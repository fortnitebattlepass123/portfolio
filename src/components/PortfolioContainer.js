
import React from 'react';
import { useCallback } from 'react';
import PortfolioItem from './PortfolioItem';
import Planet from './Planet';
;

const PortfolioContainer = (props) => {
    if (props.planetRight) {
        return (
            <div className='flex flex-row justify-evenly items-center w-full pt-20 pb-20'>
                <div className='w-1/2 flex flex-row justify-center'>
                    <PortfolioItem portfolio={props.portfolio} planetRight={props.planetRight} />
                </div>
                <div className='w-1/2 flex flex-row justify-center'>
                    <Planet planet={props.planet} planetRight={props.planetRight} />
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex flex-row justify-evenly items-center w-full pt-20 pb-20'>
                <div className='w-1/2 flex flex-row justify-center'>
                    <Planet planet={props.planet} planetRight={props.planetRight} />
                </div>
                <div className='w-1/2 flex flex-row justify-center'>
                    <PortfolioItem portfolio={props.portfolio} planetRight={props.planetRight} />
                </div>
            </div >
        );
    }
}


export default PortfolioContainer;