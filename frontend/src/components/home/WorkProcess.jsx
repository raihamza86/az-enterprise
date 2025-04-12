import React from 'react'
import WorkProcessCards from './WorkProcessCards'


function WorkProcess() {
    return (
        <div className='my-8'>
            <div className="flex items-center gap-4 justify-center">
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>
                <span className="text-[#317EFE] font-semibold whitespace-nowrap">WORK PROCESS</span>
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>

            </div>
            <h2 className="text-center my-6 md:text-5xl">Our Working Process  <br />  How We Do</h2>

            <div className="md:px-12 p-4">
                <WorkProcessCards />
            </div>
        </div>
    )
}

export default WorkProcess