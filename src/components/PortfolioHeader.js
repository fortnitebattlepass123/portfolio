
import React from 'react';
import { Link } from 'react-router-dom';
const PorfolioHeader = (props) => {
    return (
            <div className='z-20 flex backdrop-filter backdrop-blur-sm w-full bg-[#5CB3FF]/50 h-40 p-4'>
                <div className='flex flex-row justify-between items-center h-full w-full'>
                    <Link to='/portfolio'>
                        <button className='hover:-translate-y-1 hover:scale-110 duration-300 ml-10 bg-[#D0342C] text-[#eed202] text-xl pl-8 pr-8 pt-3 pb-3 rounded-lg mt-2 hover:bg-[#de1602]'>
                            Abort Mission
                        </button>

                    </Link>

                    <p className='text-5xl font-bold'>
                        {props.name}
                    </p>
                    <p className='text-3xl mr-10'>
                        {props.date}
                    </p>

                </div>

            </div>


    );

}



export default PorfolioHeader;