import useFilterContext from '../../../hooks/useFilterContext'

function Filter_Machines__Selected() {
    const { machines, toggleMachines } = useFilterContext();
    const handleRemoveSelectedMachines = (machine) => {
        toggleMachines(machine);

    }
    return (
        <ul className='my-4'>
            {
                machines.map(machine => (
                    <li className='border-[#F1F1F1] border-[1px] rounded-[80px] inline-flex items-center gap-1 px-3 py-1 mr-4' key={machine}>
                        <span className='text-[#333333] text-sm font-normal '>Stall {machine}</span>
                        <span onClick={() => handleRemoveSelectedMachines(machine)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#CACACA]">
                                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                            </svg>
                        </span>
                    </li>
                ))
            }


        </ul>
    )
}

export default Filter_Machines__Selected