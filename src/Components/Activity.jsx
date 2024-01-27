import React from 'react'
import Text from './Text/Text'

const Activity = () => {
    return (
        <div className="lg:w-[1440px] h-auto bg-[#FFFFFF] flex flex-col  max-md:justify-center max-md:items-center">

            <div className="lg:ml-[128px] mt-[50px] flex items-center gap-x-5 flex-col lg:flex-row max-lg:justify-center " >

                <Text width={"187px"} height={"27px"} weight={"700"} size={"22px"} txtheight={"26.63"} color={"black"} data={"Students Activity"} />

                <div className="w-[90%]  lg:w-[649px] lg:h-[90px] flex flex-col md:flex-row gap-x-[12px] rounded-[16px] my-auto bg-[#F9F5FF] px-[4px] py-[12px]  max-lg:justify-center max-lg:items-center max-md:mt-4">

                    <div className="lg:w-[102px] lg:h-[10px]  px-[2px]  py-[10px]  ">
                        <p className=" leading-[20px] text-sm text-[#6941C6]  rounded-[16px] bg-white text-center py-3 hover:scale-105 transition-all duration-300 px-3 lg:px-[2px]  lg:py-[10px]" >New Features</p>
                    </div>
                    <div className="lg:w-[519px] lg:h-[24px]  px-[2px]  py-[10px]">
                        <p className=" leading-[20px] text-sm text-[#6941C6] rounded-[16px] bg-white text-center py-3 hover:scale-105 transition-all duration-300 px-3 lg:px-[2px]  lg:py-[10px]" >Now you can track any of your club member & monitor them for better growth</p></div>

                </div>

            </div>

            <div className="mt-10 lg:ml-[128px] flex flex-col md:flex-row gap-y-5 gap-x-7 max-lg:justify-center max-lg:items-center  ">

                <div className="lg:w-[320px] lg:h-[70px]">
                    <input type="text" placeholder="Search" className="text-center border w-[320px] h-[44px] px-[10px] py-[14px] rounded-md" />
                </div>
                <div>

                    <select name="" id="" placeholder="Select a team member " className="w-[320px] h-[44px] border rounded-md px-3 ">
                        <option value="select ">Select a team member</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default Activity
