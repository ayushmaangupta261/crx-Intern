import React from 'react'
import Text from './Text/Text'
import QuestionsCard from './QuestionsCard/QuestionsCard'

const Questions = () => {
    return (
        <div className="w-[100%] lg:w-[100%] h-auto  flex flex-col justify-center items-center ">

            <div className="">
                <Text width={"251px"} height={"27px"} weight={"700"} size={"22px"} txtheight={"26.63"} color={"black"} data={`DSA Question’s “POTD”`} />
            </div>

            <div className="w-[80%] lg:w-[100%]  h-[64.54px] hidden md:flex justify-evenly flex-wrap mt-7 ">
                <p>Problems</p>
                <p>Difficulty</p>
                <p>Posted</p>
            </div>

            {/* Problems */}
            <div className="max-[768px]:mt-5 flex flex-col gap-y-5 justify-center items-center ">



                <QuestionsCard background={"#1E1E1E"} width={"1118.02px"} heigth={"64.54px"} txt1={"A cow jumped in front of a cow what now"} txt2={"Medium"} txt3={"12/09/45"} txt1Color={"white"} txt2Color={"#FF7A00"} txt3Color={"#FF7A00"} />

                <QuestionsCard background={"#1E1E1E"} width={"1118.02px"} heigth={"64.54px"} txt1={"A cow jumped in front of a cow what now"} txt2={"Hard"} txt3={"12/09/45"} txt1Color={"white"} txt2Color={"#FF7A00"} txt3Color={"#FF7A00"} />

                <QuestionsCard background={"#1E1E1E"} width={"1118.02px"} heigth={"64.54px"} txt1={"A cow jumped in front of a cow what now"} txt2={"Medium"} txt3={"12/09/45"} txt1Color={"white"} txt2Color={"#FF7A00"} txt3Color={"#FF7A00"} />



            </div>

        </div>
    )
}

export default Questions
