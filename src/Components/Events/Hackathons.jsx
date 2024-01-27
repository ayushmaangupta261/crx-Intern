import React from 'react'
import pc from "../../assests/Activity/pc.png"
import Text from '../Text/Text'
import HackathonCards from './Hackathon/HackathonCards'

const Hackathons = () => {
    return (
        <div className="flex flex-col max-[1024px]:justify-center  max-[1024px]:items-center max-[1024px]:gap-y-7">

            <div className="md:w-full h-auto flex max-[1024px]:justify-center  max-[1024px]:items-center  ">
                <Text width={"237px"} height={"27px"} weight={"700"} size={"22px"} txtheight={"26.63"} color={"black"} data={"On-going Hackahtons"} />
            </div>

            {/* cards */}
            <div className="flex flex-col md:flex-row  max-[1024px]:justify-center   max-[1024px]:items-center w-full  gap-x-5 mt-5" >


                <HackathonCards width={"283px"} height={"265px"} image={pc} txtHeight={"22px"} txtWidth={"222px"} txtColor={"#717171"} data={`No hack’s at this moment..`}/>

                <HackathonCards width={"283px"} height={"265px"}  txtHeight={"22px"} txtWidth={"222px"} txtColor={"#717171"} data={`No hack’s at this moment..`}/>

            </div>


        </div>
    )
}

export default Hackathons
