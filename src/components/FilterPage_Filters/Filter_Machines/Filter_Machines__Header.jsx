
import React from 'react'
import useFilterContext from '../../../hooks/useFilterContext'

function Filter_Machines__Header() {
    const { selectAllMachines } = useFilterContext();
    return (
        <div className='flex justify-between items-center '>
            <h2 className='font-medium text-sm text-[#333333]'>Machines</h2>
            <div className='underline text-xs font-medium text-[#5D6679] cursor-pointer' onClick={() => selectAllMachines()}>Clear All</div>
        </div>
    )
}

export default Filter_Machines__Header