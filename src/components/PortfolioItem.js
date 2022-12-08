
import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PortfolioItem = (props) => {
    // function to handle button click
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Link to={props.portfolio.routeTail}>

            <div id="portfolioItem" className='  ml-20 mr-40 hover:scale-105 hover:cursor-pointer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                {
                    (!isHovering) ?
                        (props.portfolio.isImg ?
                            <img width="1000" height="550" src={process.env.PUBLIC_URL + "/" + props.portfolio.url} alt="" class="w-full h-full"></img>
                            :
                            <video loop autoPlay muted width="1000" height="550" >
                                <source src={process.env.PUBLIC_URL + "/" + props.portfolio.url} type="video/mp4" />
                            </video>)
                        :
                        <div className='bg-[#545BFE] w-full h-full flex flex-col justify-center items-center'>
                            <p className='text-4xl '>
                                Mission {props.portfolio.id}:
                            </p>
                            <h1 className='text-4xl text-center'>{props.portfolio.name}</h1>
                            <h2 className='text-3xl text-center'>{props.portfolio.date}</h2>
                            <p className='text-xl text-center'>{props.portfolio.desc}</p>
                        </div>
                }





            </div>
        </Link>
    );

}


export default PortfolioItem;