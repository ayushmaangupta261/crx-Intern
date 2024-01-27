import React from 'react'

const Text = ({ width, height, weight, size, txtheight, color , data}) => {
    return (
        <div className={`md:w-[${width}] h-[${height}]  font-[${weight}] text-lg md:text-[${size}] text-[${color}] leading-[${txtheight}]`}>
        {data}
    </div>
    )
}

export default Text
