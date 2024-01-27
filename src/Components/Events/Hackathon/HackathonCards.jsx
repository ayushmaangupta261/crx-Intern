import React from 'react'

function HackathonCards({ width, height, image, data, txtWidth, txtHeight, txtColor }) {
    return (
        <div className={`flex flex-col  justify-center items-center w-[${width}] h-[${height}] shadow-md rounded-lg hover:scale-105 transition-all duration-300`}>

            {
                image ?
                    (<div>
                        <img src={image} alt="+" className="text-4xl text-[#969696]" />
                        <p className={ `w-[${txtWidth}] h-[${txtWidth}] text-center text-[${txtColor}] mt-3` }>{data}</p>
                    </div>)
                    :
                    (<p className="text-4xl text-[#969696]"> +</p>)
            }


        </div>
    )
}

export default HackathonCards
