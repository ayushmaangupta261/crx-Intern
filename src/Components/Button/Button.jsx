import React from 'react'

const Button = ({ width, height, bgColor, txtColor, data, radius, borderColor }) => {
    return (
        <div className={`w-[${width}] h-[${height}] bg-[${bgColor}] text-[${txtColor}]  rounded-[${radius}] border border-[${borderColor}] px-[12px] py-[21px] hover:scale-105 transition-all duration-300  text-center flex items-center justify-center `}>
            {data}
        </div>
    )
}

export default Button
