
import React from 'react';
import { Link } from 'react-router-dom';
const PorfolioHeader = (props) => {
    return (
        <div className='flex backdrop-filter backdrop-blur-sm w-full bg-[#5CB3FF]/50 h-auto p-18'>
            <div className='flex flex-row justify-between items-center h-full w-full mt-20 mb-20'>
                <Link to='/portfolio'>
                    <button className='hover:-translate-y-1 hover:scale-110 duration-300 ml-10 bg-[#D0342C] text-[#eed202] text-3xl pl-14 pr-14 pt-6 pb-6 rounded-lg mt-4 hover:bg-[#de1602]'>
                        Abort Mission
                    </button>

                </Link>

                <p className='text-9xl '>
                    {props.name}
                </p>
                <p className='text-6xl mr-10'>
                    {props.date}
                </p>

            </div>
        </div>

    );

}



export default PorfolioHeader;