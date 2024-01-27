import React from 'react'

const Tabs = () => {
    return (
        <div className="w-full md:h-[40px] bg-[#FFFFFF]   ">

            <div className="md:w-[744px] h-auto md:h-[19px]  flex  gap-x-5 gap-y-2 md:gap-x-[48px] mt-5 flex-wrap justify-center items-center mx-auto">

                <button className="flex md:w-[38px] h-[19px] text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300  ">Feed</button>
                <button className="flex md:w-[38px] h-[19px]  text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300">Events</button>
                <button className="flex md:w-[38px] h-[19px]  text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300">Calendar</button>
                <button className=" flex md:w-[38px] h-[19px]  text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300">Tasks</button>
                <button className="flex md:w-[38px] h-[19px]  text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300">Students</button>
                <button className="flex md:w-[38px] h-[19px]  text-[16px] text-[#3B3B3B] hover:scale-105 transition-all duration-300">Feed</button>
            </div>

        </div>
    )
}

export default Tabs;
