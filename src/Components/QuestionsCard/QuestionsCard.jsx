import React from 'react'

const QuestionsCard = ({ background, width, heigth, txt1, txt2, txt3, txt1Color, txt2Color, txt3Color }) => {
    return (
        <div className={`flex flex-col md:flex-row max-md:gap-y-1 justify-evenly bg-[${background}]  md:w-[80%] lg:w-[100%] h-[${heigth}] rounded-md text-center items-center hover:scale-105 transition-all duration-300`}>
            <p className={`w-[299.42px] h-[18px] font-[500] text-sm md:text-[14.83px] leading-[17.95px] text-[${txt1Color}] `}>{txt1}</p>
            <p className={`w-[299.42px] h-[18px] font-[500] text-[14.83px] leading-[17.95px] text-[${txt2Color}]`}>{txt2}</p>
            <p className={`w-[299.42px] h-[18px] font-[500] text-[14.83px] leading-[17.95px] text-[${txt3Color}]`}>{txt3}</p>
        </div>
    )
}

export default QuestionsCard
