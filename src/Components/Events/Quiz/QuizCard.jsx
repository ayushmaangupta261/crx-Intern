import React from 'react'

const QuizCard = ({ width, height, image, data,  date,  btnBg, btnTextColor, btnData }) => {
    return (
        <div className={`flex flex-col items-center  w-[${width}] h-[${height}] shadow-md rounded-lg hover:scale-105 transition-all duration-300`}>

            <div>
                <img src={image} alt="+" className="w-[268px] h-[127px] mt-3 " />

                <p className="w-[104px] h-[15px] text-[11.79px] leading-[14.73px] text-start text-[#068FFF] mt-3">{date}</p>

                <p className="mt-3 w-[273px] h-[44px] text-[18px] leading-[21.78px] text-start font-[500]">{data}</p>

                <button className={`mt-4 w-[93px] h-[27px]   bg-[${btnBg}] text-[${btnTextColor}] rounded-md  text-[12px] font-[700] leading-[14.52px] hover:scale-95 transition-all duration-300`}>{btnData}</button>
            </div>



        </div>
    )
}

export default QuizCard
